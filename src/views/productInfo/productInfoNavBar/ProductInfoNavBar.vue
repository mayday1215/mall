<template>
    <div>
        <nav-bar class="pro-info-nav">
            <div slot="left" @click="$router.back()">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="center">
                <div v-for="(item,index) in title" :key="index"
                     class="item"
                     :class="{active:activeFlag === index}"
                     @click="itemClick(index)"
                >{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../../components/navbar/NavBar";
  export default {
    name: "ProductInfoNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        title:['商品','参数'],
        activeFlag:0
      }
    },
    methods:{
      itemClick(index){
        this.activeFlag = index
      }
    }
  }
</script>

<style scoped>
    .pro-info-nav .center{
        display: flex;
    }
    .pro-info-nav .center .item{
        flex: 1;
        font-size: 13px;
    }
    .active{
        color: #ff5777;
    }
</style>