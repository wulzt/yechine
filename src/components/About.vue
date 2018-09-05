<template>
  <div id="about">
    <div class="aboutnav">
      <div class="h42">
        <ul>
          <li v-for='(item,index) in aboutnav' :key='index' >
            {{ item }}<span>{{ item | line(index,aboutnav.length) }} </span>
          </li>
        </ul>
      </div>
      <div class="topbar">
        <p><span @click='gohome'>Yechine首页</span> > 关于 > 公司简介</p>
      </div>
    </div>
    <div class="aboutmain w-1200">
      <div class="companyIntro">
        <p>YECHINE</p>
        <div>
          <img src="../assets/intro.png" />
          <p>
            广州热泉港生物科技有限公司自 2015 年创业以来，从简单的实验设备耗材发展到理化检测、
            智能分析系统等生命科学仪器，紧跟生命科学技术发展脚步，致力于为工业和科研提供必不可少的
            “设备、 试剂和消耗品”，促使实验结果更精准更快捷。涉及商品种类涉及到实验中的设备、 处
            理、耗材、检测、分析、防护等相关产品，涵盖了理化学、生命科学、食品检测、制药和化妆品等
            多个应用领域。
          </p>
        </div>
      </div>
      <div class="advantage">
        <div class="ad-title">
          <p>我们拥有许多专业优势</p>
          <p>热泉港全体员工秉持着为生命，为科学理念，怀抱最大的诚意，与客户携手前行</p>
        </div>
        <div class="ad-con">
          <ul>
            <li v-for='(item,index) in advList'>
              <p class="con-t"><span>{{item.id}}</span><span>{{item.title}}</span></p>
              <p class="con-msg">{{item.msg}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="map">
        <div class="map-title">
          <p>配送范围</p>
          <p>覆盖中国大陆全境，即使是一个烧杯也能配送</p>
        </div>
        <img src="../assets/map.png" />
      </div>
    </div>
  </div>

</template>
<script>
export default{
  data(){
    return{
      aboutnav:['公司简介','专业优势','配送范围'],
      advList:[
        {id:'1',title:'价格低廉',msg:'热泉港与国内外100家多的品牌供应商保持着非常牢固的合作关系，因此可以为用户提供很有竞争力的价格， 根据客户要求将对应提出多种厂家的产品方案，并进行比对选择，力求最合适的产品配最优的价格。'},
        {id:'2',title:'快捷配送、货期短',msg:'便捷快速的响应和物流配送更是帮助中国广大的研究人员、技术人员及采购人员节省了大量的调查、 下单、货期等待的时间，专人负责，专业跟进，提高双方工作效率。'},
        {id:'3',title:'预备测试、准确定位',msg:'为了帮助用户寻找最适用的商品，对于使用频次较高的消耗品， 热泉港无偿提供试用样品作为客户购买前的参考；对于机器， 亦可提供样机现场测试或用户寄样品远程样机测试服务， 让客户能对产品的功能、操作性等进行充分的确认。'},
        {id:'4',title:'最小起定量',msg:'支持单个起订，货期也非常短，即使是一个烧杯，也是热泉港尊贵的客户'},
        {id:'5',title:'技术支持',msg:'交货时提供产品的说明和技术上的支援，如安装培训、使用培训等。在确保客户能完全独自使用前，热泉港不敢有丝毫松懈。  '},
        {id:'6',title:'包退包换',msg:'如发现有质量或功能如声称的不一致，以及运输过程中产生的破损，我们将在一个星期之内进行退换处理，除非是定制及进口产品，则时间待定。'},

      ]
    }
  },
  methods:{
    gohome(){
      this.$router.push({
        path:'/',
      })
    },
  }
}
</script>
<style src="../assets/css/about.css" scoped>
</style>
