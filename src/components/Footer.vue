<template>
  <div id="footer">
    <div class="imgBox">
      <img src="../assets/fw.png" />
    </div>
    <div class="f-blue">
      <div class="f1024">
        <ul class="f-left">
          <li>网站首页</li>
          <li>关于我们</li>
        </ul>
        <ul class="f-m-left">
          <li>招贤纳士</li>
          <li>产品中心</li>
        </ul>
        <ul class="f-m-right">
          <li>电话: 020-310-41987</li>
          <li>邮件: information@yechine.com</li>
        </ul>
        <ul class="f-right">
          <li>企业地址：广州市海珠区广州大道南325号碧海商业大厦1202</li>
          <li>营业时间：9:00-18:00（周六日、节假日、公司停业日除外）</li>
        </ul>
      </div>
    </div>
    <div class="f-p">
      <p>
        版权所有@2018-2021 yechine.com      粤ICP备18062041号-1
      </p>
    </div>
  </div>
</template>
<style>
#footer{
  height: 212px;
  overflow: hidden;
}
.imgBox{
  margin-top: 82px;
  margin-bottom: 16px;
}
.f1024{
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.f-blue{
  height: 48px;
  background-color: #2e4794;
}
.f-blue ul{
  display: inline-block;
  color: white;
  font-size: 14px;
  text-align: left;
}
.f-p{
  font-size: 12px;
}
</style>
