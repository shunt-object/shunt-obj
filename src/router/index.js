import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/front/homePage'
import register from '@/views/front/register/register'
import login from '@/views/front/login/login'
import activate from '@/views/front/activate/activate'
import sendEmail from '@/views/front/send/sendEmail'
import agreenment from '@/views/front/agreenment/agreenment'
import forgetPassword from '@/views/front/forgetPassword/forgetPassword'
import consolePage from '@/views/console/consolePage/consolePage'
import resourceGroup from '@/views/console/app/resourceGroup/resourceGroup'
import createAnalysis from '@/views/console/app/createAnalysis/createAnalysis'
import accountInformation from '@/views/console/app/accountInformation/accountInformation'
import safeSetting from '@/views/console/app/safeSetting/safeSetting'
import planQuestion from '@/views/console/plan/planQuestion/planQuestion'
import compareQuestion from '@/views/console/compare/compareQuestion/compareQuestion'
import compareResult from '@/views/console/compare/compareResult/compareResult'
import planList from '@/views/console/plan/planList/planList'
import overviewList from '@/views/console/overview/overviewList/overviewList'
import compareList from '@/views/console/compare/compareList/compareList'
import measured from '@/views/console/measured/measured'
import planResult from '@/views/console/plan/planResult/planResult'
import colligateReport from '@/views/console/report/colligateReport/colligateReport'
import wei from '@/views/front/wei'
import seleconefirst from "../views/front/selecone/seleconeFirst.vue"
import sleconesecond from "../views/front/selecone/sleconeSecond.vue"
import dataDcision from '@/views/console/app/dataDcision/dataDcision'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path:"/seleconefirst",
      name:"seleconefirst",
      component: seleconefirst
    },
    {
      path:"/sleconesecond",
      name:"sleconesecond",
      component:sleconesecond
    },
    {
      path: '/wei',
      name: 'wei',
      component: wei
    },
    {
      path:'/register',
      name:'register',
      component:register
    },   
    {
      path:'/sendEmail',
      name:'sendEmail',
      component:sendEmail
    },
    {
      path:'/forgetPassword',
      name:'forgetPassword',
      component:forgetPassword
    },
    {
      path:'/activate',
      name:'activate',
      component:activate
    },
    {
      path:'/agreenment',
      name:'agreenment',
      component:agreenment
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
          path:'/dataDcision',
          name:'dataDcision',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:dataDcision
        },
        {
          path:'/accountInformation',
          name:'accountInformation',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:accountInformation
        },
        {
          path:'/safeSetting',
          name:'safeSetting',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:safeSetting
        },
        {
          path:'/compareList',
          name:'compareList',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:compareList
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
          path:'/measured',
          name:'measured',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:measured
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
        {
          path:'/colligateReport',
          name:'colligateReport',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:colligateReport
        },
      ]
    }
  ]
})
