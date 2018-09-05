<template>
  <div id="me">
    <div class="h42"></div>
    <div class="topbar">
      <p><span @click='gohome'>Yechine首页</span> > 个人</p>
    </div>
    <div class="me-title w-1200">
      <p>Basic Information</p>
      <p>基础信息</p>
    </div>
    <div class="w-1200">
      <div class="me-content">
        <p>此为用户注册预留信息</p>
        <form>
          <div class="me-inputBox">
            <p>用户名：</p>
            <input type="text" :value='profile.username'/>
          </div>
          <div class="me-inputBox">
            <p>联系人姓名：</p>
            <input type="text" :value='profile.contacts'/>
          </div>
          <div class="me-inputBox">
            <p>联系人手机：</p>
            <input type="text" :value='profile.mobile'/>
          </div>
          <div class="me-inputBox">
            <p>联系人邮箱：</p>
            <input type="text" :value='profile.email'/>
          </div>
        </form>
        <input type="button" value="退出登录" @click="logoff"/>
      </div>

    </div>
  </div>
</template>
<script>
import {setCookie,getCookie,delCookie} from '../assets/js/cookie.js'
import store from '../store'

  export default{
    inject:['reload'],

    data(){
      return{
        profile:'',
      }
    },
    mounted(){
      let self = this

      if(localStorage.getItem('accesstoken')){
        let data = {"token":localStorage.getItem('accesstoken')}

        $.ajax({
          url: "https://www.erienniu.xyz/api/profile",
          type: "POST",
          data: data,
          success: function(res) {
            self.profile = res.profile
            localStorage.setItem('profile',JSON.stringify(res.profile))
          },
          error: function(error) {
            console.log(error);
          }
        })
      }else if(localStorage.getItem('profile')){
        this.profile = JSON.parse(localStorage.getItem('profile'))
      }

    },
    methods:{
      gohome(){
        this.$router.push({
          path:'/home',
        })
      },
      logoff(){
        delCookie('username')
        store.state.isLogin = false
        if(localStorage.getItem('accesstoken')){
          let data = {"token":localStorage.getItem('accesstoken')}
          $.ajax({
            url: "https://www.erienniu.xyz/api/logout",
            type: "POST",
            data: data,
            success: function(res) {
              console.log(res.message);
            },
            error: function() {}
          })
        }

        localStorage.removeItem('accesstoken')
        localStorage.removeItem('profile')

        this.reload()
      },
    }
  }
</script>
<style scoped>
.h42{
  height: 42px;
  background-color: #2e4794;
}
.me-title{
  text-align: center;
  margin: 67px auto 47px;
}
.me-title p:first-child{
  font-size: 36px;
  display: inline-block;
  border-bottom: 2px solid #f5535b;
}
.me-title p:last-child{
  padding-top: 10px;
  font-size: 16px;
}
.me-content{
  width: 710px;
  height: 366px;
  border: 2px solid #2e4794;
  margin: 0 auto;
  text-align: left;

}
.me-content >p{
  padding: 33px 0 50px 28px;
}
.me-content form{
  height: 166px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
}
.me-inputBox{
  display: flex;
  align-items: center;
}
.me-inputBox p{
  width: 150px;
}
.me-inputBox input{
  width: 231px;
  height: 30px;
  border: 1px solid #808080;
  background-color: #f4f4f8;
}
input[type='button']{
  width: 112px;
  height: 32px;
  border: none;
  background-color: #2e4794;
  color: #fff;
  margin: 42px 0 0 300px;
}
</style>
