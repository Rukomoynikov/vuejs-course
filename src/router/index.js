import Vue from 'vue'
import Router from 'vue-router'
import UsersTable from '@/components/UsersTable'
import PageAbout from '@/components/PageAbout'
import PageRoot from '@/components/PageRoot'
import UserForm from '@/components/UserForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: PageRoot
    },
    {
      path: '/users',
      name: 'UsersTable',
      component: UsersTable,
    },
    {
      path: '/user/:id',
      name: 'UserForm',
      component: UserForm,
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: PageAbout
    }
  ]
})
