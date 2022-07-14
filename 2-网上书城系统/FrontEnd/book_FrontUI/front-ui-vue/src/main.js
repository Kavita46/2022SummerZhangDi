// 入口主函数

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '../src/http/api'

// 懒加载考虑使用
// import vueLazyload from 'vue-lazyload'

// 注册全局api和util
Vue.prototype.api = api
// Vue.prototype.$urlUtil= urlUtil

// 导入Element
import './plugins/element.js'

// 懒加载设置
// Vue.use(vueLazyload, {
//   // 配置默认图
//   loading:require('../src/assets/loading.gif'),
//   throttleWait:3000
//   // 配置加载持续时间
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
