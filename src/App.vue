<template>
  <div id="app">
    <SideBox></SideBox>
    <Header></Header>
    <router-view v-if="isRouterAlive"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import SideBox from './components/SideBox'
import Header from './components/Header'
import Footer from './components/Footer'
import store from './store/index.js'

export default {
  name: 'app',
  provide (){
    return {
     reload:this.reload
    }
  },
  data(){
    return {
       isRouterAlive:true
    }
  },
  methods:{
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
         this.isRouterAlive = true
       })
    }
  },
  components: {
    SideBox,
    Header,
    Footer,
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

input {
  -webkit-appearance:none;
  -moz-appearance: none;
  outline:0;
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
}
.w-1200{
  width: 1200px;
  margin: 0 auto;
}
.h42{
  height: 42px;
  background-color: #2e4794;
}
.topbar{
  width: 1200px;
  margin: 0 auto;
}
.topbar p{
  margin-top: 24px;
  text-align: left;
}
</style>
