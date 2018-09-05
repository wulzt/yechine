<template>
  <div id="technology">
    <p>首先感谢您对我司的信赖与支持，请留下您的联系方式，以便我们及时对应回复，非常感谢。</p>
    <form>
      <div class="t-inputBox" v-for="(item,index) in tL" :key='index'>
        <p>{{item}}</p>
        <input type="text" />
      </div>
    </form>
    <input type="button" name="" value="提交申请">
  </div>
</template>
<style>
#technology>p{
  margin: 30px auto 24px;
}
#technology form{
  width: 335px;
  height: 231px;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto 18px;
}
.t-inputBox{
  width: 330px;
  height: 26px;
  display: flex;
  justify-content: space-between;
}
.t-inputBox input{
  width: 189px;
  height: 24px;
  background-color: #f4f4f8;
  border: 1px solid #808080;
  border-radius: 4px;
}
input[type="button"]{
  width: 110px;
  height: 34px;
  background-color: #2e4794;
  color: #ffffff;
  border: 1px solid #2e4794;
}
</style>
<script>
  export default{
    data(){
      return{
        tL:['公司名称','联系人姓名','联系人电话','邮箱','产品名','内容','指定邮箱']
      }
    }
  }
</script>
