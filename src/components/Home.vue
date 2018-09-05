<template>
  <div id="home">
    <div class="bannerBox">
      <div class="w-1200">
        <div class="welcome" v-show='isLogin'>
          <h1>尊敬的{{username}}</h1>
          <h1>你好你好你好你好你你你你好好好好好好</h1>
          <input type="button" value="注销登录" @click='logoff' />
        </div>
        <div id="login" v-show='!isLogin'>
          <div class="login-top">
            <span>使用登录名登录</span><span><router-link to="/register">注册</router-link></span>
          </div>
          <div class="login-input">
            <div class="user">
              <span>用户：</span><input type="text" v-model='username'/>
            </div>
            <div class="pass">
              <span>密码：</span><input type="password" autocomplete="new-password"  v-model='password'/>
            </div>
          </div>
          <input type="submit" value="快速登录" @click='login'/>
        </div>
      </div>
    </div>
    <div class="contentBox">
      <div class="content">
        <div class="con-nav">
          <p>产品分类</p>
          <ul>
            <li v-for="(item,index) in cNavList" :key='index'
              @click="contab(index,item.view)"
              :class="{active:index==$store.state.conId}">{{item.msg}}</li>
          </ul>
        </div>
        <div>
          <ul class="pro-menu">
            <li v-for="(item,index) in $store.state.proList" :key='index'
              :class="{proActive:index==$store.state.proId}"
              @mouseover="protab(index);addData()">{{item}}</li>
          </ul>
          <div>
            <component :is="$store.state.currentView"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="newCommand w1133">
      <p>新品推荐</p>
      <div class="nC-box">
        <ul>
          <li v-for="(item,index) in newItems" :key='index'>
            <img :src="item.picture" @click='more(index)' />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <input type="button" value="了解更多" @click='goNew'/>
    </div>
    <div class="sectionTab">
      <div class="sec-ul">
        <ul>
          <li v-for="(item,index) in sections" :key='index'
          @mouseover="sectab(index)"
          :class="{secActive:index==$store.state.secId}">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="sec-con">
        <div class="tech" v-show="$store.state.secId==0">
          <ul>
            <li v-for="(item,index) in techs" :key='index'>
              <img :src="item.img"  style="border:1px solid #898989" />
              <p>{{item.msg}}</p>
              <div class="btn"><a>详情</a></div>
            </li>
          </ul>
        </div>
        <div class="web" v-show="$store.state.secId==1">
          <ul>
            <li v-for="(item,index) in webs">
              <img :src="item.img" />
              <p>{{item.msg1}}</p>
              <p>{{item.msg2}}</p>
            </li>
          </ul>
        </div>
        <div class="food" v-show="$store.state.secId==2">
          <ul>
            <li v-for='(item,index) in foods' :key='index'>
              <img :src="item.img"  />
              <div class="foodtext">
                <p>{{item.msg1}}</p>
                <p>{{item.msg2}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="newApp" v-show="$store.state.secId==3">
          <ul>
            <li v-for='(item,index) in newApp' :key='index'>
              <img :src="item.img" />
              <p>
                {{item.msg}}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cooperation from './cooperation.vue'
import technology from './technology.vue'
import notice from './notice.vue'
import product from './product.vue'

import store from '../store/index.js'
import {setCookie,getCookie,delCookie} from '../assets/js/cookie.js'

export default{
  data(){
    return{
      isLogin:false,
      username:'',
      password:'',

      cNavList: [
        {msg:'品牌合作',view:'cooperation'},
        {msg:'商品技术',view:'technology'},
        {msg:'用户登记',view:'cooperation'},
        {msg:'最新公告',view:'notice'},
      ],
      newItems:'',
      sections: ['尖端技术','网络研讨会','食药资讯','最新应用'],
      techs:[
        {img:require('../assets/p1.png'),msg:'XTrac智能液体萃取平台可用于固体、液体中目标物质的自动提取，过滤实验,可用于农业、烟草、化学、食品、制药等行业。'},
        {img:require('../assets/p2.png'),msg:'MultiTasker智能多功能样品制备平台用于前处理样品的制备，可自动完成液体化的处理，标样的制备、提取、过滤等实验，可用于制药、食品、农业、化学等行业。'},
        {img:require('../assets/p3.png'),msg:'GraviTrac智能称量平台可用于大批量的称重、恒重实验，可用于制药、农业、烟草、化工、食品、制药等行业。'},
        {img:require('../assets/p4.png'),msg:'GraviTracPLUS智能称重分装平台用于多种固体样品的自动称量及分装，混合可用于化学、食品、制药等行业。'},
      ],
      webs:[
        {img:require('../assets/web1.png'),msg1:'近期网络讲座报名',msg2:'干细胞培养及基因编辑前沿应用联合研讨会试剂对色谱、质谱检测结果的影响。'},
        {img:require('../assets/web2.png'),msg1:'干细胞培养及基因编辑前沿应用 联合研讨会',msg2:'讲座主要介绍了高纯试剂分类及其技术要求、试剂化学特性和物理性质对检测结果的影响以及试剂的选择要点和解决方案。'},
        {img:require('../assets/web3.png'),msg1:'试剂对色谱、质谱检测结果的影响',msg2:'讲座主要介绍了高纯试剂分类及其技术要求、试剂化学特性和物理性质对检测结果的影响以及试剂的选择要点和解决方案。'},
      ],
      foods:[
        {img:require('../assets/food1.png'),msg1:'第七届工业企业微生物安全控制技术与实践研讨会',msg2:'2018年，我国食品、药品、化妆品等工业领域的国家监管体系发生重大调整，工业微生物安全监控模式与技术体系创新计日可待。为把握工业微生物安全控制领域法规标准动向，探讨新形势下国内外微生物检测、鉴定、分型、溯源、评价前沿技术与应用，助力工业企业应对微生物安全共性挑战...'},
        {img:require('../assets/food2.png'),msg1:'赛默飞与云南祥云携手共建食品安全联合实验室',msg2:'2018年1月31日，云南——科学服务领域的世界领导者赛默飞世尔科技（以下简称：赛默飞）与云南省祥云县综合检验检测院于今日签署战略合作协议，双方将携手共建现代化高效检测实验室。此外，双方还将在检测方法和应用的联合开发、检测人才的培养和发展等方面展开合作。'},
        {img:require('../assets/food3.png'),msg1:'赛默飞与西安交通大学达成战略合作 携手打造西部科技创新港',msg2:'2018年5月2日，上海——科学服务领域的世界领导者赛默飞世尔科技与西安交通大学签署了战略合作协议——双方将就西安交通大学西部科技创新港——智慧学镇校级公共平台和专业实验室的建设方面开展深入合作，并共建“西安交通大学——赛默飞创新技术联合实验室”。'},
      ],
      newApp:[
        {img:require('../assets/p4.png'),msg:'GraviTracPLUS智能称重分装平台用于多种固体样品的自动称量及分装，混合可用于化学、食品、制药等行业。'},
        {img:require('../assets/p3.png'),msg:'MultiTasker智能多功能样品制备平台用于前处理样品的制备，可自动完成液体化的处理，标样的制备、提取、过滤等实验，可用于制药、食品、农业、化学等行业。'},
        {img:require('../assets/p1.png'),msg:'GraviTrac智能称量平台可用于大批量的称重、恒重实验，可用于制药、农业、烟草、化工、食品、制药等行业'},

      ]
    }
  },
  components:{
    cooperation,
    technology,
    notice,
    product,
  },
  mounted(){
    if(getCookie('username')){
      this.username = getCookie('username')
      this.isLogin = true;
      store.state.isLogin = true
    }
    var self = this
    $.ajax({
      url: "https://www.erienniu.xyz/api/newproduct",
      type: "GET",
      dataType: "jsonp",
      data: "{}",
      success: function(data) {
        self.newItems = data.data
      },
      error: function(res) {
        console.log(res);
      }
    })
  },
  methods:{
    goNew(){
      this.$router.push({
        path:'/newProduct',
      })
    },
    login(){
      if(this.username == '' || this.password == ''){
        alert('不能为空');
      }else{
        let data={'username':this.username,'password':this.password}
        let self = this
        $.ajax({
          url: "https://erienniu.xyz/api/login",
          type: "POST",
          data: data,
          success: function(res) {
            localStorage.setItem("accesstoken",res.access_token);
            alert('登陆成功')
            self.password = ''
            setCookie('username',self.username,1000*60)
            self.isLogin = true
            store.state.isLogin = true
          },
          error: function(res) {
            alert('用户名或密码错误');
            self.password = ''
          }
        })

      }
    },
    logoff(){
      this.isLogin = false
      delCookie('username')
      store.state.isLogin = false
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

      localStorage.removeItem('accesstoken')
      localStorage.removeItem('profile')
    },
    contab (index,view) {
      store.commit('contab',{index,view})
    },
    protab(index){
      store.commit('protab',index)
    },
    sectab(index){
      store.commit('sectab',index)
    },
    addData(){
      store.commit('addData')
    },
    more(index){
      store.state.detailId = this.newItems[index].id
      this.$router.push({
        path:'/detail',
        query: {
          id: this.newItems[index].id
        },
      })
    }
  }
}
</script>
<style scoped>
@import "../assets/css/home.css";
</style>
