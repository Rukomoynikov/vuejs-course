import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: () => import('@/components/pages/PageRoot.vue')
    },
    {
      path: '/users',
      name: 'UsersTable',
      component: () => import('@/components/pages/UsersTable.vue')
    },
    {
      path: '/users/new',
      name: 'NewUserForm',
      component: () => import('@/components/pages/NewUserForm.vue')
    },
    {
      path: '/user/:id',
      name: 'UserForm',
      component: () => import('@/components/pages/UserForm.vue')
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: () => import('@/components/pages/PageAbout.vue')
    },
    {
      path: '/phonelist',
      name: 'PhoneList',
      component: () => import('@/components/pages/PagePhoneList.vue')
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
