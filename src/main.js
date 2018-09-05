import Vue from 'vue'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import $ from 'jquery'

import App from './App.vue'

//自定义插入|的过滤器
Vue.filter('line',function(value,index,length){
   return index < length-1 ? '|' : ''
})

Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
