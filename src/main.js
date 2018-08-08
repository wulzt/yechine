import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: './',
      name: 'Home',
      component: Home
    },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
