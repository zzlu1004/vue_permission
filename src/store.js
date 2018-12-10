import Vue from 'vue'
import Vuex from 'vuex'
import {constantRouterMap,asyncRouterMap} from './router'

Vue.use(Vuex)



// 获取异步路由表，返回符合用户开通服务的路由表
function getAsyncRouterByService(data){
  if(data == 1){ // 1 为管理员权限，2 为角色权限
    return constantRouterMap
  }else{
    return asyncRouterMap
  }
}

export default new Vuex.Store({
  state: {
    permission: 1, // 1 为管理员权限，2 为角色权限
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        let accessedRouters = getAsyncRouterByService(data)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  },
  getters: {
    permission: state => state.permission,
    addRouters: state => state.addRouters,
  }
})
