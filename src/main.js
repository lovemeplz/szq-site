import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // global css

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
