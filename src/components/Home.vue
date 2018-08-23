<template>
  <div id="home">
    <div class="bannerBox">
      <div class="w-1200">
        <div id="login">
          <div class="login-top">
            <span>使用登录名登录</span><span>注册</span>
          </div>
          <div class="login-input">
            <div class="user">
              <span>用户：</span><input type="text" />
            </div>
            <div class="pass">
              <span>密码：</span><input type="password" autocomplete="new-password" value="" />
            </div>
          </div>
          <input type="submit" value="快速登录"/>
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
              :class="{active:index==conId}">{{item.msg}}</li>
          </ul>
        </div>
        <div>
          <ul class="pro-menu">
            <li v-for="(item,index) in proList" :key='index'
              :class="{proActive:index==proId}"
              @click="protab(index)">{{item}}</li>
          </ul>
          <div>
            <component :is="currentView"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="newCommand w1133">
      <p>新品推荐</p>
      <div class="nC-box">
        <ul>
          <li v-for="(item,index) in newItems" :key='index'>
            <img :src="item.img" style="border:1px solid #898989"/>
            <p>{{item.msg}}</p>
          </li>
        </ul>
      </div>
      <input type="button" value="了解更多"/>
    </div>
    <div class="sectionTab">
      <div class="sec-ul">
        <ul>
          <li v-for="(item,index) in sections" :key='index'
          @click="sectab(index)"
          :class="{secActive:index==secId}">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="sec-con">
        <div class="tech" :style="{'display': secId==0?'block':'none'}">
          <ul>
            <li v-for="(item,index) in techs" :key='index'>
              <img :src="item.img"  style="border:1px solid #898989" />
              <p>{{item.msg}}</p>
              <div class="btn"><a>详情</a></div>
            </li>
          </ul>
        </div>
        <div class="web" :style="{'display': secId==1?'block':'none'}">
          <ul>
            <li v-for="(item,index) in webs">
              <img :src="item.img" />
              <p>{{item.msg1}}</p>
              <p>{{item.msg2}}</p>
            </li>
          </ul>
        </div>
        <div class="food" :style="{'display': secId==2?'block':'none'}"></div>
        <div class="newApp" :style="{'display': secId==3?'block':'none'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import cooperation from './cooperation.vue'
import technology from './technology.vue'
import notice from './notice.vue'
import product from './product.vue'

export default{
  data(){
    return{
      conId: -1,
      proId: 0,
      secId: 0,
      currentView:'product',
      proList: ['容器','计量器具/实验器具/耗材','试验用品/材料/试剂','通用仪器/实验仪器','理化前处理/分析仪器','微生物检测','个人防护产品系列'],
      cNavList: [
        {msg:'品牌合作',view:'cooperation'},
        {msg:'商品技术',view:'technology'},
        {msg:'用户登记',view:'cooperation'},
        {msg:'最新公告',view:'notice'},
      ],
      newItems:[
        {img:require('../assets/newsCom1.png'),msg:'PP制塑料瓶'},
        {img:require('../assets/newsCom2.png'),msg:'三角烧瓶'},
        {img:require('../assets/newsCom3.png'),msg:'刷子'},
        {img:require('../assets/newsCom4.png'),msg:'真空排气橡胶管'},
        {img:require('../assets/newsCom5.png'),msg:'经济型清洗瓶'},
      ],
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
      ]
    }
  },
  components:{
    cooperation,
    technology,
    notice,
    product,
  },
  methods:{
    contab(index,view){
      this.conId = index;
      this.currentView = view;
    },
    protab(index){
      this.proId = index;
      this.currentView = product;
      this.conId = -1;
    },
    sectab(index){
      this.secId = index;
    },
  }
}
</script>
<style>
@import "../assets/css/home.css";
</style>
