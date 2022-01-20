import Vue from 'vue'
import VueRouter from 'vue-router'

// 加载vueRouter,注册为vue插件
Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    // 路由地址
    path: '/home',
    name: 'home',
    // 路由组件
    component: () => import(/* webpackChunkName: 'home' */'@/views/home/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */'@/views/home/index')
      }
      // 书写后续内部的路由组件
    ]
  },
  {
    path: '*',
    name: 'error-page',
    // 路由优化：路由懒加载
    component: () => import(/* webpackChunkName: 'error-page' */'@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
