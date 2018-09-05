<template>
  <div id="product">
    <ul class="second-menu">
      <li class="second-content" v-for="(item,index) in $store.state.secMenuT" :key='index'>
        <span class="second-t" @click='searchIt(item)'>{{item}}</span>
        <span class="line2" v-for="(val,index) in $store.state.line2[index]" :key='index'
          @click='searchIt(val)'>
          {{val}}
        </span>
      </li>
    </ul>

  </div>
</template>
<script>
import store from '../store/index.js'

  export default{
    inject:['reload'],

    mounted(){
      if(!store.state.haveProList){
        const jsonp = require('jsonp');

        jsonp('https://erienniu.xyz/api/sidebar', null, (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            store.state.data = JSON.parse(JSON.stringify(data.data))
            this.addProList()
            this.addData()
          }
        });
        store.state.haveProList = true
      }else{}
    },


    methods:{
      addProList(){
        store.commit('addProList')
      },
      addData(){
        store.commit('addData')
      },
      searchIt(val){

        this.$router.push({
          path:'/search',
          query: {
            page: '1',
            select: '',
            keyword: val,
          },
        })
      }

    }
  }
</script>
<style>
#product{
  display: inline-flex;
  margin: 16px auto 0;
  font-size: 14px;
}
.second-menu{
  width: 828px;
  height: 331px;
  border: 1px solid #2e4794;
  padding: 20px 0 0 18px;
  box-sizing: border-box;
}
.second-content{
  width: 790px;
  height: 40px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}
.second-t{
  color: #f5535b;
  margin-right: 15px;
}
.line2{
  margin-right: 5px;
}
</style>
