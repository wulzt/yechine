import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  conId: -1,
  proId: 0,
  secId: 0,
  currentView:'product',
  proList: [],
  secMenuT:'',
  line2:'',
  haveProList:false,
  detailId:0,
  showNum: 8,
  isLogin: false,

}

const mutations = {

  contab(state,{index,view}){
    if(index==0||index==1||index==2){
      if(state.isLogin){
        state.conId = index;
        state.currentView = view;
      }else{
        alert('请先登录')
        return false
      }
    }
    state.conId = index;
    state.currentView = view;
  },
  protab(state,index){
    state.proId = index;
    if(state.currentView == 'product'){
    }else{
      state.currentView = 'product';
    }
    state.conId = -1;
  },
  sectab(state,index){
    state.secId = index;
  },
  addProList(state){
    for(let i = 0;i<state.data.length;i++){
      state.proList.push(state.data[i].class_name)
    }
  },
  addData(state){
    state.secMenuT = []
    state.line2 = []
    for(let i = 0;i<state.data[state.proId].children.length;i++){
      state.secMenuT.push(state.data[state.proId].children[i].class_name)
      state.line2[i]=[]
      for(let j = 0; j<state.data[state.proId].children[i].children.length;j++){
        state.line2[i].push(state.data[state.proId].children[i].children[j])

      }
    }
  },



}

export default new Vuex.Store({
  mutations,
  state,
})
