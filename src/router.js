import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 默认路由
export const defalutRouter = []

// 管理员权限路由
export const constantRouterMap = [
  {
    path: '/',
    redirect: 'index',
    component: () => import('./components/Dashboard.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('./views/index.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('./views/goods.vue')
      },
      {
        path: '/member',
        name: 'member',
        component: () => import('./views/member.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('./views/orders.vue')
      }
    ]
  }
]

// 角色权限路由
export const asyncRouterMap = [
  {
    path: '/',
    redirect: 'index',
    component: () => import('./components/Dashboard.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('./views/index.vue')
      },
      {
        path: '/member',
        name: 'member',
        component: () => import('./views/member.vue')
      },
    ]
  }
]


export default new Router({
  linkActiveClass: 'linkclass',
  routes: defalutRouter
})
