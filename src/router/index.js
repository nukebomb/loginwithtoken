import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'

Vue.use(Router)

let routeArr = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
const router = new Router({
  mode: 'history',
  routes: routeArr
})

// router.beforeEach((to, from, next) => {
//   console.log('from: ' + JSON.stringify(from))
//   console.log('to: ' + JSON.stringify(to))
//   next()
// })
export default router
