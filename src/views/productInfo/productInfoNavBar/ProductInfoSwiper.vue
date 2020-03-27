<template>
    <div class="my-swiper">
        <swiper ref="mySwiper" class="swiperBox" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in swiperArr" :key="index">
                <img :src="item" alt="">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "ProductInfoSwiper",
    components: {Swiper, SwiperSlide},
    props:{
      swiperArr:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 2000
          },
          loop: true
        }
      }
    }
  }
</script>

<style scoped>
.my-swiper{
    margin-top: 44px;
}
.swiperBox{
    width: 100vw;
    height: 300px;
}
.my-swiper{
    /*height: 400px;*/
    /*background: red;*/
}
.my-swiper img {
    width: 100%;
    /*height: 100%;*/
}

.swiper-container {
    --swiper-theme-color: #fff;
}
</style>