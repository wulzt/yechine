import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Me from '../components/Me'
import About from '../components/About'
import Contact from '../components/Contact'
import Register from '../components/Register'
import Result from '../components/Result'
import Detail from '../components/Detail'
import NewProduct from '../components/NewProduct'
import MoreNews from '../components/MoreNews'
import GoodGuy from '../components/GoodGuy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/search',
      name: 'Result',
      component: Result
    },
    {
      path:'/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path:'/newProduct',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path:'/moreNews',
      name: 'MoreNews',
      component: MoreNews
    },
    {
      path:'/goodGuy',
      name: 'GoodGuy',
      component: GoodGuy
    },
  ]
})
