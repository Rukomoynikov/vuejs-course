// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Copy from 'v-copy'
import VTooltip from 'v-tooltip'
import VeeValidate from 'vee-validate'

import App from './App.vue'
import router from './router/index.js'
import './assets/sass/main.scss'

Vue.use(Copy)
Vue.use(VTooltip)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
