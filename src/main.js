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
import "datatables/media/css/jquery.dataTables.min.css"
import "datatables/media/js/jquery.dataTables.min.js"




Vue.prototype.$layer = layer(Vue);
Vue.prototype.$this = axios;
axios.defaults.withCredentials=true;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
Vue.use(VueResource);


axios.interceptors.response.use(
    response => {
        
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

// 退出
Vue.prototype.logout = function(){
    this.$this.get('/broker/auth/logout').then((response)=>{
        if(response.data.code=='1'){
            sessionStorage.clear();
            this.$router.push({path:'/'});
        }
    }).catch((error)=>{
        console.log(error);
    })
}

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (sessionStorage.getItem("accountId")) {  // 通过vuex state获取当前的token是否存在
            next();
        }else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
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
