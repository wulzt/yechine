<template>
  <div id="cooperation">
    <p>请填写以下申请信息，填写完成后按下“登记申请”按钮提交信息。</p>
    <form ref="form">
      <div class="inputBox" id="cname">
        <p>公司名称</p>
        <input type="text" name="company_name" required="required" />
      </div>
      <div class="inputBox" id="address">
        <p>公司地址</p>
        <input type="text" name="company_address" required="required" />
      </div>
      <div class="inputBox" id="name">
        <p>联系人姓名</p>
        <input type="text" name="contacts" required="required" />
      </div>
      <div class="inputBox" id="phone">
        <p>联系人电话</p>
        <input type="text" name="mobile" required="required" />
      </div>
      <div class="inputBox" id="type">
        <p>合作产品类别</p>
        <input type="text" name="category" required="required" />
      </div>
      <div class="inputBox" id="intro">
        <p>合作产品简介</p>
        <input type="text" name="introduction" required="required" />
      </div>
      <div class="inputBox" id="file">
        <p>上传资质（营业执照）</p>
        <a class="upload">
          <span>选取文件</span>
          <input type="file" name="company_licence" ref="avatarInput" required="required" />
        </a>
      </div>
      <div class="inputBox" id="c-content">
        <p>公司经营内容</p>
        <select name="company_content" required="required" >
          <option disabled="disabled" selected="selected">请选择</option>
          <option>大学·科学院·政府机构</option>
          <option>国营公司</option>
          <option>国内民营公司</option>
          <option>外资公司</option>
        </select>
      </div>
      <div class="inputBox" id="property">
        <p>公司经营性质</p>
        <select name="company_nature" required="required" >
          <option disabled="disabled" selected="selected">请选择</option>
          <option>用户</option>
          <option>经销商</option>
        </select>
      </div>
      <div class="inputBox" id="fund">
        <p>公司资金构成</p>
        <select name="company_finance" required="required" >
          <option disabled="disabled" selected="selected">请选择</option>
          <option>外资</option>
          <option>中资</option>
          <option>中外合资</option>
        </select>
      </div>
    </form>
    <input type="button" name="" value="登记申请" @click='submit'>
  </div>
</template>
<script>
  export default{
    methods:{
      submit(){
          let oData = new FormData(this.$refs.form)
          // for(var pair of oData.entries()) {
          //        console.log(pair[0]+ ', '+ pair[1]);
          //     }
        $.ajax({
           url: "http://www.erienniu.xyz/api/companyregister",
           type: "POST",
           data: oData,
           processData: false,  // 告诉jQuery不要去处理发送的数据
           contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
           success: (res)=>{
             alert('提交成功，请耐心等候回复');
           },
           error:(error)=>{
             alert('请确认是否填写完成')
           }
        });
      },

    }
  }


</script>
<style scoped>
input[type="button"]{
  width: 110px;
  height: 34px;
  background-color: #2e4794;
  color: #ffffff;
  border: 1px solid #2e4794;
}
#cooperation>p{
  margin-top: 15px;
}
.inputBox{
  height: 41px;
  width: 330px;
  display: flex;
  justify-content: space-between;
}
#cooperation form{
  width: 737px;
  height: 261px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  margin: 26px auto 0;
  font-size: 14px;
  color: #000000;
}
#type, #intro{
  width: 616px;
}
.inputBox input,
.inputBox select {
  height: 26px;
  background-color: #f4f4f8;
  border: 1px solid #808080;
  border-radius: 6px;
}
#cname input,
#address input,
#name input,
#phone input{
  width: 212px;
}
#type input,
#intro input{
  width: 497px;
}
#file,
#c-content,
#property,
#fund{
  width: 291px;
}
#c-content select,
#property select,
#fund select{
  width: 112px;
}

input[type="file"]{
  opacity: 0;
  width: 112px;
  position: absolute;
  top: 0;
  left: 0;
}
.upload{
  width: 112px;
  height: 26px;
  background-color: #f4f4f8;
  border: 1px solid #808080;
  border-radius: 6px;
  position: relative;
}
</style>
