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
import animate from 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import url from '../src/components/js/url.js'//公共方法获取url
import mobile from '../src/components/js/mobile.js'//判断移动端

// import "../rongCloud/RongIMLib-cs"
// import "../rongCloud/cs.min.css"
// import "../rongCloud/cs.min.js"



Vue.prototype.$layer = layer(Vue);
Vue.prototype.$this = axios;
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['loading'] = true;
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(url);
Vue.use(mobile);
let load;
let loading;
Vue.http.interceptors.push((request, next) => {
    if (request.headers.loading) {
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
    　　next((response) => {
        if (response.status == 200) {
            loading.close();
        }
        　　　return response;
    });
});


axios.interceptors.request.use(
    config => {
        /* load = layer(Vue).loading(2, {
            time: 0
        }); */
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
axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            //layer(Vue).close(load);
            loading.close();
        }
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

// 退出
Vue.prototype.logout = function () {
    this.$this.get('/broker/auth/logout').then((response) => {
        if (response.data.code == '1') {
            sessionStorage.removeItem("utype");
            sessionStorage.removeItem("accountId");
            sessionStorage.removeItem("account");
            sessionStorage.removeItem('uuid')
            sessionStorage.clear();
            localStorage.removeItem("as");
            this.$router.push({ path: '/' });
        }
    }).catch((error) => {
        console.log(error);
    })
}

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (sessionStorage.getItem("account")) {  // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
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
