import Vue from 'vue'
import Router from 'vue-router'
import UsersTable from '@/components/UsersTable'
import VTooltip from 'v-tooltip'
import Copy from 'v-copy'

Vue.use(Copy)
Vue.use(Router)
Vue.use(VTooltip)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UsersTable',
      component: UsersTable
    }
  ]
})
