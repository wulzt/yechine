<template>
  <div id="contact">
    <div class="h42">
      <ul>
        <li>联系我们 |</li>
        <li> 在线留言</li>
      </ul>
    </div>
    <div class="topbar">
      <p><span @click='gohome'>Yechine首页</span> > 联系我们</p>
    </div>
    <div class="w-1200">
      <div class="contactUs">
        <div class="ctTitle">
          <p>联系我们 Contact Us</p>
        </div>
        <div class="ctContent">
          <ul>
            <li>
              <p>咨询内容：</p>
              <p>未登载商品、询价、订购、售后、技术咨询、客户登记</p>
            </li>
            <li>
              <p>请联系：</p>
              <p>热泉港客服中心</p>
            </li>
            <li>
              <p>电话：</p>
              <p>020-310-41987</p>
            </li>
            <li>
              <p>邮件：</p>
              <p>information@yechine.com</p>
            </li>
            <li>
              <p>企业地址：</p>
              <p>广州市海珠区广州大道南325号碧海商业大厦1202</p>
            </li>
            <li>
              <p>营业时间：</p>
              <p>上午9点-下午6点（周六日、节假日、我公司停业日除外）</p>
            </li>
          </ul>
          <p>
            我们将以 <span>迅速 准确 认真 </span>为宗旨竭诚为您服务！
          </p>
        </div>
      </div>
      <div class="onlineMsg">
        <div class="ctTitle">
          <p>在线留言 Online Message</p>
        </div>
        <div class="olmsg">
          <form>
            <div class="msgbox">
              姓名：<input type="text" v-model='name'/>
            </div>
            <div class="msgbox">
              邮箱：<input type="text" v-model='email'/>
            </div>
            <div class="msgbox">
              手机：<input type="text" v-model='mobile' />
            </div>
            <textarea v-model='content'>请输入您的留言</textarea>
          </form>
          <input type="button" value="提交" @click='submit'/>
        </div>
      </div>
      <div class="c-imgBox">
        <img src="../assets/people.png" />
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        name:'',
        email:'',
        mobile:'',
        content:'',
      }
    },
    methods:{
      gohome(){
        this.$router.push({
          path:'/',
        })
      },
      submit(){
        let data = {'name':this.name,'email':this.email,'mobile':this.mobile,'content':this.content}
        console.log(data);
        $.ajax({
          url: "https://www.erienniu.xyz/api/contact",
          type: "POST",
          data: data,
          success: function(res) {
            console.log(res);
            alert('提交成功！请耐心等候回复！');
          },
          error: function(error) {
            alert('提交失败或请勿重复提交！')
          }
        })
      },
    }
  }
</script>
<style scoped>
.h42 li{
  line-height: 42px;
  color: #fff;
  font-size: 18px;
}
.w-1200{
  position: relative;
}
.contactUs{
  width: 573px;
}
.ctTitle p{
  font-size: 24px;
  text-align: left;
  padding: 49px 0 37px;
  position: relative;
}
.ctTitle p::after{
  content: '';
      position: absolute;
      width: 226px;
      height: 2px;
      background: #2e4794;
      bottom: 30px;
      left: 0;
}
.ctContent ul li{
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 25px;
}
li p:first-child{
  width: 90px;
  text-align: right;
  padding-left: 100px;
}
.ctContent>p{
  font-size: 18px;
  padding: 22px 0 14px 50px;
}
.ctContent>p span{
  font-size: 20px;
  color: #f5535b;
}
.olmsg{
  text-align: left;
  font-size: 14px;
  padding-left: 18px;
}
.msgbox input{
  width: 149px;
  height: 25px;
  border: 1px solid #000;
  margin-left: 5px;
}
.msgbox{
  margin-bottom: 19px;
}
textarea{
  width: 278px;
  height: 113px;
  border: 1px solid #000;
  position: absolute;
  top: 0;
  left: 250px;
  font-size: 14px;
  padding: 10px 0 0 5px;
}
form{
  position: relative;
}
input[type='button']{
  width: 90px;
  height: 31px;
  color: #fff;
  border: none;
  background-color: #2e4794;
  margin-top: 35px;
  margin-left: 200px;
}
.c-imgBox{
  position: absolute;
  top: 100px;
  right: 0;
}
</style>
