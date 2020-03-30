import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartData:[],
    // a:0
  },
  mutations:{
    updateCartData(state,val){
      // console.log(val)
      let newVal = {}
      for (var key in val){
        // console.log(val[key])
        newVal[key] = val[key]
      }
      // console.log(val)
      // state.cartData.push(newVal)
      // state.cartData[0].count++
      // console.log(state.cartData[0])
      // console.log("哈哈哈")
      if (state.cartData.length === 0){
        state.cartData.push(newVal)
        return
      }




      for (let i = 0; i < state.cartData.length; i++){
       if (state.cartData[i].iid == newVal.iid){
         state.cartData[i].count++
         return;
       }
      }
      state.cartData.push(newVal)
    },
    updateCartCheck(state,id){
      for (let i = 0; i < state.cartData.length;i++){
        if (state.cartData[i].iid == id){
          state.cartData[i].isChecked = !state.cartData[i].isChecked
          return
        }
      }
    }
  },
  getters:{},
  actions:{},
  modules:{}
})

export default store


