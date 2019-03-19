import Vue from 'vue'
import router from './router'
import App from './App.vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // global css

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
