<template>
  <div id="goodGuy">
    <div class="h42"></div>
    <div class="topbar">
      <p><span @click='gohome'>Yechine首页</span> > 人才招聘</p>
    </div>
    <div class="w-1200">
      <div class="guyTitle">
        <p>Join Us</p>
        <p>加入我们</p>
      </div>
      <div class="guyCon">
        <div class="jobBox">
          <ul class="firul">
            <li>
              <p>职位名称：</p>
              <p>技术专员</p>
            </li>
            <li>
              <p>职位责任：</p>
              <ul class="secul">
                <li>1、机械工程、生命科学相关专业，本科及以上。</li>
                <li>2、熟悉掌握机械运转、工程建设等专业知识。</li>
                <li>3、具备良好的团队合作协调沟通能力。</li>
                <li>4、具备良好的生命科学仪器操作水平，能够熟练操作各类办公软件。</li>
                <li>5、具备诚信、创新及服务意识。</li>
              </ul>
            </li>
            <li>
              <p>职业要求：</p>
              <ul class="secul">
                <li>1、为客户提供产品知识培训及使用培训；帮助销售专员和客户更好地理解产品的仪器使用。</li>
                <li>2、协助产品推广，向客户现场演示和介绍产品、使用的方法；</li>
                <li>3、收集资料和客户需求反馈，研究仪器使用优势和新的产品应用领域。</li>
              </ul>
            </li>
            <li>
              <p>工作地点：</p>
              <p>广州</p>
            </li>
          </ul>
        </div>
        <div class="jobBox">
          <ul class="firul">
            <li>
              <p>职位名称：</p>
              <p>客户经理</p>
            </li>
            <li>
              <p>职位责任：</p>
              <ul class="secul">
                <li>1、大专以上学历，.有相关从业经验和资源者优先；</li>
                <li>2、有一线销售经验，具有良好的沟通能力、客户意识以及抗压能力；</li>
                <li>3、性格外向、乐观、能吃苦耐劳、开拓进取，乐于接受挑战；</li>
                <li>4、掌握电脑操作基本知识，能熟练使用常用办公软件。</li>
              </ul>
            </li>
            <li>
              <p>职业要求：</p>
              <ul class="secul">
                <li>1、最深入的挖掘用户需要</li>
                <li>2、做独一无二的技术方案</li>
                <li>3、进行技术交流和商务谈判</li>
                <li>4、持续的用户拜访和保证用户的满意度</li>
              </ul>
            </li>
            <li>
              <p>工作地点：</p>
              <p>广州</p>
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
.guyTitle p:first-child{
  font-size: 36px;
  position: relative;
  padding: 36px 0 5px;
}
.guyTitle p:last-child{
  font-size: 16px;
  padding: 5px 0 39px;
}
.guyTitle>p:first-child::after{
  content: '';
  position: absolute;
  width: 124px;
  height: 2px;
  background: #f5535b;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.jobBox{
  width: 778px;
  height: 295px;
  border: 1px solid #2e4794;
  background-color: #f4f4f8;
  margin: 0 auto 33px;
}
.firul{
  font-size: 14px;
  padding-top: 14px;
}
.firul>li{
  display: flex;
  line-height: 28px;
}
.firul>li>p:first-child{
  width: 75px;
  padding-left: 74px;
  padding-right: 20px;
}
.secul{
  width: 611px;
  display: flex;
  flex-wrap: wrap;
}
.secul>li{
  width: 600px;
  text-align: left;
}
</style>
