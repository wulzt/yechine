<template>
  <div id="sideBox">
    <div class="QRcode"></div>
    <div class="QQ" @click='qq'></div>
    <div class="position" @click='goContact'></div>
  </div>
</template>
<script>
  export default{
    methods:{
      goContact(){
        this.$router.push({
          path:'/contact'
        })
      },
      qq(){
        window.open('http://wpa.qq.com/msgrd?v=3&uin=3447430671&site=qq&menu=yes')
      },
    }
  }
</script>
<style scoped>
  #sideBox{
    position: fixed;
    width: 65px;
    height: 200px;
    right: 0;
    top: 40%;
    z-index: 999;
  }
  #sideBox div{
    width: 65px;
    height: 65px;
    margin-bottom: 2px;
    background: url('../assets/sidebox.png') no-repeat #f5535b;
  }
  #sideBox .QRcode{
    background-position: 7px 6px;
  }
  #sideBox .QQ{
    background-position: 7px -60px;
  }
  #sideBox .position{
    background-position: 7px -125px;
  }
</style>
