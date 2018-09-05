<template>
  <div id="notice">
    <div>
      <div class="noticeBox">
        <p><span>2018|</span>06.06</p>
        <p class="what">人才招聘</p>
        <p><router-link :to="{path:'/goodGuy'}">详情>>></router-link></p>
      </div>
      <div class="noticeBox">
        <p><span>2018|</span>05.07</p>
        <p class="what">网站上线说明</p>
        <p>详情>>></p>
      </div>
      <div class="noticeBox">
        <p><span>2018|</span>05.03</p>
        <p class="what">全新功能介绍</p>
        <p>详情>>></p>
      </div>
    </div>
    <router-link :to="{path:'/moreNews'}"><p class="getmore">更多</p></router-link>

  </div>
</template>
<style scoped>
#notice>div{
  display: flex;
  flex-wrap: wrap;
  height: 170px;
  justify-content: center;
  align-content: space-between;
  margin-top: 69px;
}
.noticeBox{
  width: 866px;
  display: flex;
  font-size: 18px;
  padding-left: 110px;
}
.noticeBox span{
  font-size: 30px;
}
.what{
  padding-left: 100px;
}
.noticeBox p:last-child{
  padding-left: 100px;
}
.getmore{
  margin: 63px auto 0;
  width: 89px;
  line-height: 34px;
  font-size: 18px;
  border: 1px solid #000;
  color: #010101;
}
.noticeBox a{
  color: #010101;
}
</style>
