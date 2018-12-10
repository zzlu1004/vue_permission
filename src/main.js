import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/common.scss';
Vue.use(ElementUI);

Vue.config.productionTip = false
// // 安全路由
const nextRoute = ['service']
// 全局路由守卫
router.beforeEach((to, from, next) => {
    if(store.getters.addRouters.length > 0){
      next()
    }else{
      let isAdmin = store.getters.permission
      store.dispatch('GenerateRoutes',isAdmin).then(res => { // 拉取service
        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        next(to.path)
      })
    }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
