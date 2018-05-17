import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/front/homePage'
// import register from '@/views/front/register/register'
import registerOne from '@/views/front/register/registerOne'
import registerTwo from '@/views/front/register/registerTwo'
import registerThree from '@/views/front/register/registerThree'
import login from '@/views/front/login/login'
import wechartAbout from '@/views/front/wechartAbout/wechartAbout'
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
import cloudselection from "../views/front/selecone/cloudselection.vue"
import cloudplanning from "../views/front/selecone/cloudplanning.vue"
import clouddesignning from "../views/front/selecone/clouddesignning.vue"
import wudata from "../views/front/selecone/wudata.vue"
import technologyandservices from "../views/front/selecone/technologyandservices.vue"
import cloudbuying from "../views/front/selecone/cloudbuying.vue"
import recruitmentconsultant from "../views/front/selecone/recruitmentconsultant.vue"
import csbcommunity from "../views/front/selecone/csbcommunity.vue"
import industryheadlines from "../views/front/selecone/industryheadlines.vue"
import newsdynamic from "../views/front/selecone/newsdynamic.vue"
import partners from "../views/front/selecone/partners.vue"
import cloudmeasured from "../views/front/selecone/cloudmeasured.vue"
import messageCenter from "../views/front/messageCenter/messageCenter.vue"
import messAdd from "../views/front/messageCenter/messAdd.vue"
import aboutus from "../views/front/selecone/aboutus.vue"
import cloudmarket from "../views/front/selecone/cloudmarket.vue"
import bigcafeTeam from '@/views/front/university/bigcafeTeam/bigcafeTeam'
import openCourse from '@/views/front/university/openCourse/openCourse'
import teamDetail from '@/views/front/university/teamDetail/teamDetail'
import classProcess from '@/views/front/university/classProcess/classProcess'
import susDecision from '../views/console/dataDecision/susDecision/susDecision'
import smarterDecision from '@/views/console/dataDecision/smarterDecision/smarterDecision.vue'
import roiDecision from '@/views/console/dataDecision/roiDecision/roiDecision'
import pay from '@/views/console/pay/pay'
import appcenterList from '@/views/console/appCenter/appcenterList/appcenterList'
import appcenterPlan from '@/views/console/appCenter/appcenterPlan/appcenterPlan'
import appcenterPrice from '@/views/console/appCenter/appcenterPrice/appcenterPrice'
import appcenterCheck from '@/views/console/appCenter/appcenterCheck/appcenterCheck'
import appcenterRoi from '@/views/console/appCenter/appcenterRoi/appcenterRoi'
import appcenterProxy from '@/views/console/appCenter/appcenterProxy/appcenterProxy'
import appcenterSearch from '@/views/console/appCenter/appcenterSearch.vue'
import appcenterCloudEye from '@/views/console/appCenter/appcenterCloudEye.vue'
import appcenterOptimization from "@/views/console/appCenter/appcenterOptimization.vue"
import notification from "@/views/console/notificationCenter/notificationCenter"
import adviserCenter from '@/views/console/adviserCenter/adviserCenter'//顾问
import orderlist from '@/views/console/orderlist/orderlist'
import shoppingCar from '@/views/console/shoppingCar/shoppingCar'
import vis from "../views/front/visiterying/visiterying.vue"
import leame from "../views/front/LeaveAmessage/LeaveAmessage.vue"
import adviserList from "../views/front/adviser/adviserList.vue"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      // 云选型
      path:"/cloudselection",
      name:"cloudselection",
      component: cloudselection
    },
    {
      // 云规划
      path:"/cloudplanning",
      name:"cloudplanning",
      component:cloudplanning
    },
    {
      // 云实测
      path:"/cloudmeasured",
      name:"cloudmeasured",
      component:cloudmeasured
    },
      {
      //关于我们 
      path:"/aboutus",
      name:"aboutus",
      component:aboutus
    },
    //应用市场
    {
      path: "/cloudmarket",
      name: "cloudmarket",
      component:cloudmarket
    },
     {
      //  云设计
      path:"/clouddesignning",
      name:"clouddesignning",
      component:clouddesignning
    },
     {
      // 招募顾问
      path:"/recruitmentconsultant",
      name:"recruitmentconsultant",
      component:recruitmentconsultant
    },
    {
      // Pro.吴数据
      path:"/wudata",  
      name:"wudata",
      component:wudata
    },
     {
      //  技术与服务
      path:"/technologyandservices",
      name:"technologyandservices",
      component:technologyandservices
    },
    {
      // 云购买
      path:"/cloudbuying",
      name:"cloudbuying",
      component:cloudbuying
    },
    {
      // csb社群
      path:"/csbcommunity",
      name:"csbcommunity",
      component:csbcommunity
    },
    {
      // 行业头条
      path:"/industryheadlines",
      name:"industryheadlines",
      component:industryheadlines
    },
    {
      // 新闻动态
      path:"/newsdynamic",
      name:"newsdynamic",
      component:newsdynamic
    },
    {
      // 合作伙伴
      path:"/partners",
      name:"partners",
      component:partners
    },
    {
      path: '/CustomerService',
      name: 'CustomerService',
      component: CustomerService
    },
    {//大咖团队
      path:'/bigcafeTeam',
      name: 'bigcafeTeam',
      component: bigcafeTeam
    },
    {//公开课程
      path:'/openCourse',
      name: 'openCourse',
      component: openCourse
    },
    {//团队详情
      path:'/teamDetail',
      name: 'teamDetail',
      component: teamDetail
    },
    {//上课流程
      path:'/classProcess',
      name: 'classProcess',
      component: classProcess
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
      path:'/wechartAbout',
      name:'wechartAbout',
      component:wechartAbout
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
          path:"/adviserList",
          name:"adviserList",
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:adviserList
        },
        {//顾问
          path:"/adviserCenter",
          name:"adviserCenter",
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:adviserCenter
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
          path:'/appcenterPlan',
          name:'appcenterPlan',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterPlan
        },
        {
          path:'/appcenterSearch',
          name:'appcenterSearch',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterSearch
        },
        {
          path:'/appcenterCloudEye',
          name:'appcenterCloudEye',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterCloudEye
        },
        {
          path:'/appcenterPrice',
          name:'appcenterPrice',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterPrice
        },
        {
          path:'/appcenterCheck',
          name:'appcenterCheck',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterCheck
        },
        {
          path:'/appcenterRoi',
          name:'appcenterRoi',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterRoi
        },
        {
          path:'/appcenterProxy',
          name:'appcenterProxy',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterProxy
        },
        {
          path:'/appcenterOptimization',
          name:'appcenterOptimization',
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:appcenterOptimization
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
