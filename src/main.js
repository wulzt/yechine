import Vue from 'vue'
import router from './router'
import axios from 'axios'

import App from './App.vue'

//自定义插入|的过滤器
Vue.filter('line',function(value,index,length){
   return index < length-1 ? '|' : ''
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
