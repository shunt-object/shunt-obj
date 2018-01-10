import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/front/homePage'
import register from '@/views/front/register/register'
import login from '@/views/front/login/login'
import consolePage from '@/views/console/consolePage/consolePage'
import resourceGroup from '@/views/console/app/resourceGroup/resourceGroup'
import createAnalysis from '@/views/console/app/createAnalysis/createAnalysis'
import planQuestion from '@/views/console/plan/planQuestion/planQuestion'
import compareQuestion from '@/views/console/compare/compareQuestion/compareQuestion'
import compareResult from '@/views/console/compare/compareResult/compareResult'
import planList from '@/views/console/plan/planList/planList'
import overviewList from '@/views/console/overview/overviewList/overviewList'
import resetviewList from '@/views/console/overview/resetviewList/resetviewList'
import planResult from '@/views/console/plan/planResult/planResult'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path:'/register',
      name:'register',
      component:register
    },   
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/consolePage',
      name:'consolePage',
      meta: {
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component:consolePage,
      children:[
        {
          path:'/',
          name:'overviewList',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:overviewList
        },
        {
          path:'/resetviewList',
          name:'resetviewList',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:resetviewList
        },
        {
          path:'/planList',
          name:'planList',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:planList
        },
        {
            path:'/createAnalysis',
            name:'createAnalysis',
            meta: {
              requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            },
            component:createAnalysis
        },
        {
          path:'/planQuestion',
          name:'planQuestion',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:planQuestion
        },
        {
          path:'/compareQuestion',
          name:'compareQuestion',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:compareQuestion
        },
        {
          path:'/resourceGroup',
          name:'resourceGroup',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:resourceGroup
        },
        {
          path:'/planResult',
          name:'planResult',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:planResult
        },
        {
          path:'/compareResult',
          name:'compareResult',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:compareResult
        },
      ]
    }
  ]
})
