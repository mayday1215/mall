<template>
    <div class="show-img">
        <div class="text">图片展示</div>
        <div class="item" v-for="(item,index) in showImgs" :key="index">
            <img :src="item" @load="imgLoad">
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProductInfoShowImages",
    props:{
      showImgs:{
        type:Array,
        default(){
          return []
        }
      },
      banners:{
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.banners.refresh()
      }
    }
  }
</script>

<style scoped>
    .show-img{
        width: 100vw;
    }
    .text{
        font-weight: bold;
        color: #666;
        text-align: center;
        margin: 10px;

    }

    .show-img img{
        width: 100% !important;
        border-bottom:5px solid rgba(0,0,0,.1);
    }
</style>