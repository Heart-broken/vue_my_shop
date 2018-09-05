import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false
// 安装element-ui
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
