<template>
  <div id="register">
    <div class="h42"></div>
    <div class="topbar">
      <p><span @click='gohome'>Yechine首页</span> > 用户注册</p>
    </div>
    <div class="registerBox w-1200">
      <p>
        用户注册 | <span>Sign Up</span>
      </p>
      <div>
        <form>
          <div class="r-inputBox">
            <p>用户名：</p>
            <input type="text" v-model='newUsername'/>
          </div>
          <div class="r-inputBox">
            <p>密码：</p>
            <input type="text" v-model='newPassword'/>
          </div>
          <div class="r-inputBox">
            <p>联系人：</p>
            <input type="text" v-model='newContacts'/>
          </div>
          <div class="r-inputBox">
            <p>手机：</p>
            <input type="text" v-model='newMobile'/>
          </div>
          <div class="r-inputBox">
            <p>邮箱：</p>
            <input type="text" v-model='newEmail'/>
          </div>
        </form>
        <input type="button" name="" value="注册"
          @click='register'>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        regL:['用户名：','密码：','联系人：','手机：','邮箱：'],
        newUsername:'',
        newPassword:'',
        newContacts:'',
        newMobile:'',
        newEmail:'',
      }
    },
    methods:{
      gohome(){
        this.$router.push({
          path:'/',
        })
      },
      register(){
        if(this.newUsername == '' || this.newPassword == '' || this.newContacts == '' || this.newMobile == '' || this.newEmail == ''){
          alert('请完善信息');
        }else{
          let data={'username':this.newUsername,'password':this.newPassword,'contacts':this.newContacts,'mobile':this.newMobile,'email':this.newEmail}
          var self = this
          $.ajax({
            url: "https://erienniu.xyz/api/signup",
            type: "POST",
            data: data,
            success: function() {
              alert('注册成功')
              self.$router.push({path:'/home'})
            },
            error: function(res) {
              console.log(res);
              alert(res.responseJSON.message);
            }
          })
        }
      }
  }
}
</script>

<style scoped="register">
.registerBox>p{
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 45px;
}
.registerBox>p span{
  color: #f5535b;
}
.registerBox>div{
  width: 702px;
  height: 400px;
  border: 2px solid #2e4794;
  background-color: #f4f4f8;
  margin: 0 auto;

}
.registerBox form{
  height: 250px;
  padding: 32px 0;
  display: flex;
  font-size: 14px;
  align-content: space-between;
  flex-wrap: wrap;
}
.r-inputBox{
  width: 394px;
  line-height: 36px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.r-inputBox input{
  height: 33px;
  width: 229px;
  border: 1px solid #000000;
  border-radius: 5px;
}
#register input[type="button"]{
  width: 110px;
  height: 34px;
  background-color: #2e4794;
  color: #ffffff;
  border: 1px solid #2e4794;
}
</style>
