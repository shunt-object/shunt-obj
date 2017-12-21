import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import Register from '@/views/register/register'
import Login from '@/views/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
