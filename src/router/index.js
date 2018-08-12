import Vue from 'vue'
import Router from 'vue-router'
import UsersTable from '@/components/UsersTable'
import PageAbout from '@/components/PageAbout'
import PageRoot from '@/components/PageRoot'
import UserForm from '@/components/UserForm'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: PageRoot
    },
    {
      path: '/users',
      name: 'UsersTable',
      component: UsersTable
    },
    {
      path: '/user/:id',
      name: 'UserForm',
      component: UserForm
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: PageAbout
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (to.path === '/about') {
    next()
  } else {
    if (!localStorage.getItem('token')) {
      next()
    } else {
      NProgress.done()
      next({ path: '/about' })
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
