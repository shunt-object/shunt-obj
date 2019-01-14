import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/front/homePage'

import login from '@/views/front/login/login.vue'
import consolePage from '@/views/console/consolePage/consolePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'homePage',
    //   component: homePage
    // },
    {
      path:'/',
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
        // {
        //   path:'/design',
        //   name:'design',
        //   meta: {
        //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        //   },
        //   component:design
        // }
      ]
    }
  ]
})
