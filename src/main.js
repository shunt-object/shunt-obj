// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VueResource from 'vue-resource'
import axios from 'axios'
import layer from 'vue-layer'
import 'font-awesome/css/font-awesome.min.css'
import  "datatables/media/css/jquery.dataTables.min.css"
import  "datatables/media/js/jquery.dataTables.min.js"
import '../src/components/fontCss/icon.css'
import '../src/components/fontCss/common.css'
// 全局color
import '../src/components/css/mian.css'
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'

Vue.prototype.$layer = layer(Vue);
Vue.prototype.$this = axios;
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
Vue.use(VueResource);
Vue.use(ElementUI);
let load;
let loading;

axios.interceptors.request.use(
    config => {
        if (config.headers.loading) {
            loading = Vue.prototype.$loading({
                lock: true,
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)',
                customClass: 'loading'
            });
            setTimeout(function () {
                loading.close();
            }, 3000)
        }
        return config;
    }
)
// axios.interceptors.response.use(
//     response => {
//         if (response.status == 200) {
//             //layer(Vue).close(load);
//             loading.close();
//         }
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 403:
//                     router.replace({
//                         path: '/login',
//                         query: { redirect: router.currentRoute.fullPath }
//                     })
//             }
//         }
//         return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//     });

// 退出
Vue.prototype.closeOrexit = function () {
    this.$this.get('/api/logout').then((response) => {
        if (response.data.retCode == 0) {
            sessionStorage.removeItem("nxgx");
            sessionStorage.clear();
            this.$router.push({ path: '/' });
        }
    }).catch((error) => {
        console.log(error);
    })
}

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限  
        if (sessionStorage.getItem("nxgx")) {  // 获取当前的是否有信息是否存在
            var _EXPIRE_TIME =50*60*1000;  //过期时间 50分钟  毫秒级
            var sessionTime = JSON.parse(sessionStorage.getItem("nxgx")).lastVisitTime  //sessionStorage存储的登录时间
            var newTime = new Date().getTime();      //当前时间（getTime得出的时间戳为毫秒级）
            if(newTime-sessionTime > _EXPIRE_TIME){
                next({
                    path: '/'
                });
                alert("过期了，请重新登录");
                sessionStorage.removeItem("nxgx");
            }else{
                next()
            }
        } else {
            next({
                path: '/',
                // query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },

})
