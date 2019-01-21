import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/views/front/homePage'

import login from '@/views/front/login/login.vue'
import consolePage from '@/views/console/consolePage/consolePage.vue'
import ruleConfig from '@/views/console/ruleConfig/ruleConfig.vue'
import rulesCreate from '@/views/console/ruleConfig/rulesCreate.vue'
import port from '@/views/console/port/port.vue'
import portInto from '@/views/console/portInto/portInto.vue'
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
          requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component:consolePage,
      children:[
        {
          path:'/consolePage/ruleConfig',
          name:'ruleConfig',
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:ruleConfig
        },
        {
          path:'/consolePage/ruleConfig/rulesCreate',
          name:'rulesCreate',
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:rulesCreate
        },
        {
          path:'/consolePage/port',
          name:'port',
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:port
        },
        {
          path:'/consolePage/port/portInto',
          name:'portInto',
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component:portInto
        }
      ]
    }
  ]
})
