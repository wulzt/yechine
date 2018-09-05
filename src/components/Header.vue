<template>
  <div id="header">
    <div id="header-1200" class="w-1200">
      <div class="logoBox">
        <img src="../assets/logo.png" />
      </div>
      <div class="introBox">
        <ul>
          <li v-for="(item,index) in introList">
            <img :src="item.img" />
            <p>{{item.msg}}</p>
          </li>
        </ul>
      </div>
      <div class="searchBox">
        <div class="s-input">
          <input type="text" class="search" placeholder="请输入您要搜索的产品名次、型号或名称" v-model="searchVal" @keyup.enter="searchIt"/>
          <input type="submit" class="s-submit" value="搜索" @click="searchIt()"/>
        </div>
        <div class="s-hot">
          HOT:
          <li v-for="(val,index) in hotList"
            @click="searchVal = val,searchIt()">
            {{val}}<span>{{val | line(index,hotList.length) }}</span>
          </li>
        </div>
      </div>
      <div class="navBox">
        <li v-for="(item,index) in navList">
          <router-link :to="item.path">{{item.msg}}</router-link><span>{{item | line(index,navList.length) }}</span>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'

export default {
  inject:['reload'],
  data(){
    return{
      searchVal:'',
      introList: [
        {img: require('../assets/1.png'), msg: '品种多'},
        {img: require('../assets/2.png'), msg: '货期短'},
        {img: require('../assets/3.png'), msg: '价格低'},
        {img: require('../assets/4.png'), msg: '包退换'},
      ],
      hotList:[
        '灭菌器','离心管','手套','PH计','活性口罩',
      ],
      navList: [
        {msg:'个人',path:'/me'},
        {msg:'首页',path:'/'},
        {msg:'关于',path:'/about'},
        {msg:'订购',path:'/contact'},
      ],
    }
  },
  methods: {
    searchIt(){
      var self = this
      if(this.searchVal==''){
        alert('输入不能为空')
      }else{
        localStorage.setItem("searchVal",this.searchVal);
        $.ajax({
          url: 'https://erienniu.xyz/api/search?page=1&keyword='+self.searchVal+'&select=',
          type: "GET",
          dataType: "jsonp", //指定服务器返回的数据类型
          data: "{}",
          success: function(data) {
            var storage=window.localStorage;

            console.log(data);
            if(!window.localStorage){
                alert("浏览器支持localstorage");
                return false;
            }else{
                storage.setItem("result",JSON.stringify(data.data.item));
            }
            self.reload()
          },
          error: function(error) {
            console.log(error)
          }
        });
      }
      this.$router.push({
        path:'/search',
        query: {
          page: '1',
          select: '',
          keyword: this.searchVal,
        },
      })

    }
  },
}
</script>

<style>
.w-1200{
    width: 1200px;
    margin: 0 auto;
}
#header-1200{
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.introBox ul{
  width: 220px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}
.introBox li{
  width: 95px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introBox p{
  display: inline-block;
  margin: 0;
  padding-left:13px;
  color: #ff5959;
}
.searchBox{
  width: 336px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.s-input{
  font-size: 0;
  display: flex;
  align-items: center;
}
.search{
  height: 38px;
  width: 270px;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #2e4794;
}
.s-submit{
  width: 64px;
  height: 38px;
  font-size: 14px;
  color: white;
  border: 1px solid #2e4794;
  background-color: #2e4794;
}
.s-hot{
  text-align: left;
  color: #2e4794;
  font-size: 14px;
}
.s-hot li{
  margin: 0 2px;
}
.navBox{
  align-self: flex-start;
  margin-top: 55px;
}
.navBox li{
  margin: 0;
  margin-left: 10px;
  font-size: 16px;
  color: #2e4794;
}
.navBox span{
  margin-left: 10px;
}
</style>
