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
      currentView:'product',
      proList: ['容器','计量器具/实验器具/耗材','试验用品/材料/试剂','通用仪器/实验仪器','理化前处理/分析仪器','微生物检测','个人防护产品系列'],
      cNavList: [
        {msg:'品牌合作',view:'cooperation'},
        {msg:'商品技术',view:'technology'},
        {msg:'用户登记',view:'cooperation'},
        {msg:'最新公告',view:'notice'},
      ],
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
    }
  }
}
</script>
<style>
@import "../assets/css/home.css";
</style>
