import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    msg:'我是共有数据'
  },
  mutations:{},
  getters:{},
  actions:{},
  modules:{}
})

export default store


