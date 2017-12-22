import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import Register from '@/views/register/register'
import Login from '@/views/login/login'
import Qualitative from '@/views/Qualitative/qualitative'
import ResourceGroup from '@/views/App/ResourceGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HomePage',
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
    },
    {
      path:'/qualitative',
      name:'qualitative',
      component:Qualitative
    },
    {
       path:'/',
      name:'ResourceGroup',
      component:ResourceGroup
    }
  ]
})
