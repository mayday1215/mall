<template>
    <div class="my-swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in banners" :key="item.index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "HomeSwiper",
    components: {Swiper, SwiperSlide},
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
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
    },

  }
</script>

<style scoped>
    .my-swiper img {
        width: 100%;
        height: 100%;
    }

    .swiper-container {
        --swiper-theme-color: #fff;
    }

</style>