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
import planList from '@/views/console/plan/planList/planList'
import overviewList from '@/views/console/overview/overviewList/overviewList'
import resetviewList from '@/views/console/overview/resetviewList/resetviewList'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homePage',
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
      path:'/',
<<<<<<< HEAD
      name:'resourceGroup',
      component:resourceGroup
    },
     
    {
      path:'/consolePage',
=======
>>>>>>> 91a516ce9bce9742ffddcb5d1729113e31be1e90
      name:'consolePage',
      component:consolePage,
      children:[
        {
          path:'/overviewList',
          name:'overviewList',
          component:overviewList
        },
        {
          path:'/resetviewList',
          name:'resetviewList',
          component:resetviewList
        },
        {
          path:'/planList',
          name:'planList',
          component:planList
        },
        {
            path:'/createAnalysis',
            name:'createAnalysis',
            component:createAnalysis
        },
        {
          path:'/planQuestion',
          name:'planQuestion',
          component:planQuestion
        },
        {
          path:'/compareQuestion',
          name:'compareQuestion',
          component:compareQuestion
        },
        {
          path:'/resourceGroup',
          name:'resourceGroup',
          component:resourceGroup
        },
      ]
    }
  ]
})
