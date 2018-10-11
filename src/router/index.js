import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
Vue.use(Router)

let routeArr = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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

// router.forEach((to, from, next) => {
//     console.log(to.path)
//     // if(to.path !== '/login' && !localStorage.getItem('token')) {
//     //   return next('/login')
//     // }
//     next ()
// });
export default router