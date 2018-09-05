<template>
  <div id="detail">
    <div class="h42"></div>
    <div class="detailBox w-1200">
      <div class="img-text">
        <div class="left">
          <p class="top"><span @click='$router.go(-1)'>&lt; 返回</span></p>
          <img :src="bigImg" class="big-img" />
          <div class="sm-box">
            <img v-for="(item,index) in pic" :key='index'
              class="sm-img"
              :src="item"
              @click='changeBig(index)'
              :class="{imgActive:index==imgId}" />
          </div>
        </div>
        <div class="right">
          <p class="top">{{name}}</p>
          <p class="de-title">◆ 产品详情</p>
          <div class="de-content">
            <p>品牌：{{brand}}</p>
            <ul class="character">
              特点：
              <li v-for="(item,index) in character" :key='index'>
                {{item}}
              </li>
            </ul>
            <ul class="standard">
              规格：
              <li v-for="(item,index) in standard" :key='index'>
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="info">
        <p><span>◆</span> 产品参数</p>
        <table>
          <tr>
            <th v-for='(item,index) in saleTitle' :key='index'>
              {{item}}
            </th>
          </tr>
          <tr v-for='(item,index) in saleList' :key='index'>
            <td v-for='(val,index) in item' :key='index'>
              {{val}}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store/index.js'
export default{
  data(){
    return{
      imgId:0,
      bigImg:'',
      name:'',
      pic:[],
      brand:'',
      character:[],
      standard:[],
      saleTitle:[],
      saleList:[],
    }
  },
  methods:{
    changeBig(index){
      this.imgId = index
      this.bigImg = this.pic[index]
    }
  },
  mounted(){
    let self = this
    $.ajax({
      url:'https://erienniu.xyz/api/detail?id='+ self.$route.query.id,
      type: 'GET',
      dataType: 'jsonp',
      data:"{}",
      success(data){
        console.log(data.data);
        self.name = data.data.name
        for(let i=0; i<data.data.pic_url.length; i++){
          self.pic.push(data.data.pic_url[i])
        }
        self.bigImg = data.data.pic_url[0]
        self.brand = data.data.brand
        for(let i=0; i<data.data.character.length; i++){
          self.character.push(data.data.character[i])
        }
        for(let i=0; i<data.data.standard.length; i++){
          self.standard.push(data.data.standard[i])
        }
        for(let i=0; i<data.data.salelist.title.length; i++){
          self.saleTitle.push(data.data.salelist.title[i])
        }
        for(let i=0; i<data.data.salelist.content.length; i++){
          self.saleList[i] = []
          for(let j=0; j<data.data.salelist.content[i].length; j++){
            self.saleList[i].push(data.data.salelist.content[i][j])
          }
        }
      },
      error: function(error) {
        console.log(error)
      }
    })

  }
}
</script>
<style scoped>
.imgActive{
  border: 2px solid #000000;
}
.img-text{
  display: flex;
  padding: 0 10%;
}
.left{
  text-align: left;
}
.left .top{
  margin: 49px 0 52px -73px;
  font-size: 24px;
}
.right .top{
  margin: 49px 0 52px 50%;
  padding-bottom: 8px;
  text-align: center;
  white-space: nowrap;
  font-size: 24px;
  display: inline-block;
  transform: translateX(-50%);
  border-bottom: 2px solid #f5535b;
  font-weight: 600;
}
.right{
  text-align: left;
  margin-left: 60px;
  min-width: 600px;
}
.de-title{
  font-size: 18px;
  margin-bottom: 23px;
}
.de-content{
  padding-left:35px;
  line-height: 25px;
}
ul.character{
  list-style-type: circle;
}
.character >li{
  display: block;
  padding-left: 50px;
}
ul.standard{
  list-style-type: circle;
}
.standard >li{
  display: block;
  padding-left: 50px;
}
.big-img{
  width: 421px;
  height: 421px;
}
.sm-img{
  width: 64px;
  height: 64px;
  margin-right: 10px;
}
table{
  width: 921px;
  border: 1px solid #808080;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 14px;

}

table th {
  border-bottom: 1px solid #808080;
  background-color: #f4f4f8;
  height: 40px;
}
table td {
  height: 40px;
  border-bottom: 1px solid #cfcfcf;
}
.info>p{
  text-align: left;
  padding: 82px 0 41px 120px;
  font-size: 18px;
}
.info>p span{
  color: red;
  font-size: 24px;
}
.info{
  margin-bottom: 113px;
}
</style>
