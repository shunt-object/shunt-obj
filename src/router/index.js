import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/front/homePage'
// import register from '@/views/front/register/register'
import registerOne from '@/views/front/register/registerOne'
import registerTwo from '@/views/front/register/registerTwo'
import registerThree from '@/views/front/register/registerThree'
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
import compareList from '@/views/console/compare/compareList/compareList'
import compareQuestion from '@/views/console/compare/compareQuestion/compareQuestion'
import compareResult from '@/views/console/compare/compareResult/compareResult'
import planList from '@/views/console/plan/planList/planList'
import planQuestion from '@/views/console/plan/planQuestion/planQuestion'
import planResult from '@/views/console/plan/planResult/planResult'
import overviewList from '@/views/console/overview/overviewList/overviewList'
import measured from '@/views/console/measured/measured'
import yunzc from '@/views/console/yunzc/yunzc'
import TheirAllies from '@/views/console/TheirAllies/TheirAllies'
import design from '@/views/console/design/design'
import designer from '@/views/console/designer/designer'
import ReviewTheData from '@/views/console/ReviewTheData/ReviewTheData'
import designHalf from '@/views/console/design/designHalf/designHalf'
import designOrder from '@/views/console/design/designOrder/designOrder'
import colligateReport from '@/views/console/report/colligateReport/colligateReport'
import CustomerService from '@/views/front/CustomerService'
import seleconefirst from "../views/front/selecone/seleconeFirst.vue"
import sleconesecond from "../views/front/selecone/sleconeSecond.vue"
import seleconeThree from "../views/front/selecone/seleconeThree.vue"
import messageCenter from "../views/front/messageCenter/messageCenter.vue"
import messAdd from "../views/front/messageCenter/messAdd.vue"
import seleconeFour from "../views/front/selecone/seleconeFour.vue"
import susDecision from '../views/console/dataDecision/susDecision/susDecision'
import smarterDecision from '@/views/console/dataDecision/smarterDecision/smarterDecision.vue'
import roiDecision from '@/views/console/dataDecision/roiDecision/roiDecision'
import pay from '@/views/console/pay/pay'
import appcenterList from '@/views/console/appCenter/appcenterList/appcenterList'
import notification from "@/views/console/notificationCenter/notificationCenter"
import orderlist from '@/views/console/orderlist/orderlist'
import shoppingCar from '@/views/console/shoppingCar/shoppingCar'
import vis from "../views/front/visiterying/visiterying.vue"
import leame from "../views/front/LeaveAmessage/LeaveAmessage.vue"



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
      path:"/seleconeThree",
      name:"seleconeThree",
      component:seleconeThree
    },
      {
      path:"/seleconeFour",
      name:"seleconeFour",
      component:seleconeFour
    },
     
    {
      path: '/CustomerService',
      name: 'CustomerService',
      component: CustomerService
    },
    // {
    //   path:'/register',
    //   name:'register',
    //   component:register
    // }, 
    {
      path:'/registerOne',
      name:'registerOne',
      component:registerOne
    }, 
    {
      path:'/registerTwo',
      name:'registerTwo',
      component:registerTwo
    }, 
    {
      path:'/registerThree',
      name:'registerThree',
      component:registerThree
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
          path:"/leame",
          name:"leame",
          component:leame
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
          path:'/susDecision',
          name:'susDecision',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:susDecision
        },
        {
          path:'/smarterDecision',
          name:'smarterDecision',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:smarterDecision
        },
        {
          path:'/roiDecision',
          name:'roiDecision',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:roiDecision
        },
        {
          path:'/orderlist',
          name:'orderlist',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:orderlist
        },
        {
          path:'/shoppingCar',
          name:'shoppingCar',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:shoppingCar
        },
        {
          path:'/notification',
          name:'notification',
          component:notification
        },
         {
          path:"/messageCenter",
          name:"messageCenter",
          component:messageCenter
        },
         {
          path:"/messAdd",
          name:"messAdd",
          component:messAdd
        },
         {
          path:"/vis",
          name:"vis",
          component:vis
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
          path:'/appcenterList',
          name:'appcenterList',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterList
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
          path:'/yunzc',
          name:'yunzc',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:yunzc
        },
         
        {
          path:'/TheirAllies',
          name:'TheirAllies',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:TheirAllies
        },
        {
          path:'/design',
          name:'design',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:design
        },
        {
          path:'/designer',
          name:'designer',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:designer
        },
        {
          path:'/ReviewTheData',
          name:'ReviewTheData',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:ReviewTheData
        },
        {
          path:'/designOrder',
          name:'designOrder',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:designOrder
        },
        {
          path:'/pay',
          name:'pay',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:pay
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
