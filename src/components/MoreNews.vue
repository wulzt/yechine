<template>
  <div id="moreNews">
    <div class="h42"></div>
    <div class="topbar">
      <p><span @click='gohome'>Yechine首页</span> > 最新公告</p>
    </div>
    <div class="news-title w-1200">
      <p>Latest News</p>
      <p>最新消息</p>
    </div>
    <div class="w-1200">
      <div class="news-con">
        <div class="year">2018</div>
        <div class="timeline"></div>
        <div class="newsItem">
          <ul>
            <li>●
              <p>06.06</p>
              <p class="wwhat">人才招聘</p>
              <p><router-link :to="{path:'/goodGuy'}">详情>>></router-link></p>
            </li>
            <li>●
              <p>05.07</p>
              <p class="wwhat">网站上线说明</p>
              <p>详情>>></p>
            </li>
            <li>●
              <p>05.03</p>
              <p class="wwhat">全新功能介绍</p>
              <p>详情>>></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      gohome(){
        this.$router.push({
          path:'/',
        })
      },
    }
  }
</script>
<style scoped>
.news-title p:first-child{
  font-size: 30px;
  position: relative;
  padding: 48px 0 5px;
}
.news-title p:last-child{
  font-size: 16px;
  padding: 5px 0 41px;
}
.news-title>p:first-child::after{
  content: '';
  position: absolute;
  width: 188px;
  height: 2px;
  background: #f5535b;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.news-con{
  width: 806px;
  height: 307px;
  border: 2px solid #03329a;
  margin: 0 auto;
  background-color: #f4f4f8;
  display: flex;

}
.year{
  font-size: 30px;
  margin: 35px 55px 0 149px;
}
.timeline{
    width: 3px;
    height: 231px;
    background-color: #f5535b;
    margin-top: 40px;
}
.newsItem ul{
  margin-top: 94px;
  width: 500px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.newsItem li{
  width: 500px;
  display: flex;
  align-items: center;
  margin-left: -5px;
  font-size: 14px;
}
.newsItem li p:first-child{
  padding-left: 15px;
}
.wwhat{
  padding: 0 50px;
}
</style>
