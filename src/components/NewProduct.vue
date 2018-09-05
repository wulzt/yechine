<template>
  <div id="newProduct">
    <div class="h42"></div>
    <div class="topbar">
      <p><span @click='gohome'>Yechine首页</span> > 新品推荐</p>
    </div>
    <div class="np-title">
      <p>新品推荐 | <span>New Product</span></p>
    </div>
    <div class="np-bar">
      <ul class="np-fir-ul">
        <li :class="{npActive:npId==-1}"
          @click='npId=-1,getAll()'>全部</li>
        <ul class="np-sec-ul">
          <li v-for='(item,index) in selectList'
            @click='select(index)'
            :class="{npActive:index==npId}">
            {{item}}
          </li>
        </ul>
      </ul>
    </div>
    <div class="np-content">
      <div class="npBox" v-for="(item,index) in showList"
        v-show='index < $store.state.showNum'>
        <img :src="item.picture" @click='more(index)'/>
        <p>{{item.name}}</p>
      </div>
    </div>
    <input type="button" value="加载更多"
      @click='$store.state.showNum+=8'
      v-show='showList.length > $store.state.showNum'/>
  </div>
</template>
<script>
import store from '../store/index.js'

export default{
  data(){
    return{
      showList:'',
      selectList:'',
      npId: -1,
    }
  },
  mounted(){
    let self = this
    $.ajax({
      url: "https://www.erienniu.xyz/api/newproductall",
      type: "GET",
      dataType: "jsonp",
      data: "{}",
      success: function(data) {
        self.showList = data.data.item
        self.selectList = data.data.meta
      },
      error: function(res) {
        console.log(res);
      }
    })
  },
  methods:{
    getAll(){
      let self = this
      $.ajax({
        url: "https://www.erienniu.xyz/api/newproductall",
        type: "GET",
        dataType: "jsonp",
        data: "{}",
        success: function(data) {
          self.showList = data.data.item
          self.selectList = data.data.meta
          console.log(1);

        },
        error: function(res) {
          console.log(res);
        }
      })
    },
    gohome(){
      this.$router.push({
        path:'/',
      })
    },
    more(index){
      store.state.detailId = this.showList[index].id
      this.$router.push({
        path:'/detail',
        query: {
          id: this.showList[index].id
        },
      })
    },
    select(index){
      this.npId = index;
      let self = this
      $.ajax({
        url: "https://www.erienniu.xyz/api/newproductselect?select="+self.selectList[index],
        type: "GET",
        dataType: "jsonp",
        data: "{}",
        success: function(data) {
          self.showList = data.data
        },
        error: function(res) {
          console.log(res);
        }
      })
    },
  }
}
</script>
<style scoped>
.w-1200 p{
  text-align: left;
  margin-top: 20px;
}
.np-title{
  margin: 74px 0 37px;
  font-size: 30px;
}
.np-title span{
  color: #f5535b;
}
.np-bar{
  width: 862px;
  border-top: 2px solid #2e4794;
  border-bottom: 2px solid #2e4794;
  margin: 0 auto;
  padding: 20px;
  font-size: 14px;
}
.np-content{
  width: 1050px;
  margin: 70px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.npBox{
  width: 200px;
  height: 250px;
  margin: 10px 25px 50px 35px;
}
.npBox img{
  height: 200px;
  width: 200px;
}
#newProduct input[type='button']{
  height: 36px;
  width: 90px;
  border:none;
  background-color: #2e4794;
  color: #fff;
  font-size: 14px;
}
.np-fir-ul{
  display: flex;
}
.np-fir-ul>li:first-child{
  width: 52px;
  height: 28px;
  line-height: 28px;
}
.npActive{
  background-color: #44589c;
  color: #fff;
  border-radius: 8px;
}
.np-sec-ul{
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 60px;
  line-height: 28px;
  margin-bottom: -20px;
}
.np-sec-ul li{
  padding: 0 15px;
  text-align: center;
  margin-bottom: 20px;

}
</style>
