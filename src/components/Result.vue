<template>
  <div id="result">
    <div class="h42"></div>
    <div class="topbar">
      <p><span @click='gohome'>Yechine首页</span> > 搜索关键词<span>{{searchVal}}</span>的结果</p>
    </div>
    <div class="resultContent w-1200">
      <div class="search-nav">
        <div class="type">
          <div class="nav-cls">分类</div>
          <div class="nav-ul">
            <ul>
              <li v-for='(item,index) in type'>
                {{item}}
              </li>
            </ul>
          </div>
        </div>
        <div class="brand">
          <div class="nav-cls">品牌</div>
          <div class="nav-ul">
            <ul>
              <li v-for='(item,index) in brand'>
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="itemsBox">
        <div class="item" v-for="(item,index) in this.result" :key='index'>
          <img :src="item.picture" @click='more(index)'/>
          <p>{{item.name}}</p>
        </div>
        <div class="noItem" v-show='!haveItem'>
          没找到，搜别的吧
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import store from '../store/index.js'
export default{
  data(){
    return{
      searchVal: '',
      result: '',
      type:'',
      brand:'',
      haveItem: true,
    }
  },
  mounted(){
    let self = this
    $.ajax({
      url: 'https://erienniu.xyz/api/search?page=1&keyword='+self.$route.query.keyword+'&select=',
      type: "GET",
      dataType: "jsonp", //指定服务器返回的数据类型
      data: "{}",
      success: function(data) {
        self.searchVal = self.$route.query.keyword
        self.result = data.data.item
        if(data.data.length == 0 || data.data.item.length == 0){
          self.haveItem = false
        }
        if(data.data!=''&&data.data.meta.length!=0){
          self.type = data.data.meta.content.分类
          self.brand = data.data.meta.content.品牌
        }
      },
      error: function(error) {
        console.log(error)
      }
    });
  },
  methods:{
    gohome(){
      this.$router.push({
        path:'/',
      })
    },
    more(index){
      let self = this
      store.state.detailId = this.result[index].id
      this.$router.push({
        path:'/detail',
        query: {
          id: this.result[index].id
        },
      })
    }
  }
}
</script>
<style scoped>
.noItem{
  margin-left: 100px;
  font-size: 24px;
}
.topbar span:last-child{
  color: #f5535b;
}
.search-nav{
  width: 1009px;
  border: 1px solid #808080;
  margin: 58px auto 64px;
}
.type{
  border-bottom: 1px solid #808080;
  display: flex;

}
.brand{
  display: flex;
}
.nav-ul ul{
  width: 830px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 5px 0 5px 20px;
  line-height: 25px;
}
.nav-ul ul li{
  margin-right: 50px;
}
.nav-cls{
  border-right: 1px solid #808080;
  width: 194px;
  line-height: 52px;
}
.itemsBox{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item{
  width: 200px;
  height: 230px;
  margin-top: 30px;
  margin-right: 36px;
  font-size: 14px;
}
img{
  width: 200px;
  height: 200px;
}
</style>
