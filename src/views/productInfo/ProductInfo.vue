<template>
    <div class="product-info">
        <!--头部导航-->
        <product-info-nav-bar></product-info-nav-bar>
        <div class="wrap" ref="wrap">
            <div class="content">
                <!--轮播图-->
                <product-info-swiper :swiperArr="swiperArr"></product-info-swiper>
                <!--商品信息-->
                <product-info-message :productInfo="productInfo"></product-info-message>
                <!--商家信息-->
                <product-info-shop :shop="shop"></product-info-shop>
                <!--商品图片暂时-->
                <product-info-show-images :showImgs="showImgs" :banners="banners"></product-info-show-images>
                <!--参数展示-->
                <product-info-param :params="params"></product-info-param>

            </div>
        </div>


    </div>
</template>

<script>
  import ProductInfoNavBar from "./productInfoNavBar/ProductInfoNavBar";
  import ProductInfoSwiper from "./productInfoNavBar/ProductInfoSwiper";
  import ProductInfoMessage from "./productInfoNavBar/ProductInfoMessage";
  import ProductInfoShop from "./productInfoNavBar/ProductInfoShop";
  import ProductInfoShowImages from "./productInfoNavBar/ProductInfoShowImages";
  import ProductInfoParam from "./productInfoNavBar/ProductInfoParam";
  import BScroll from "better-scroll"

  export default {
    name: "ProductInfo",
    components: {
      ProductInfoParam,
      ProductInfoShowImages, ProductInfoSwiper, ProductInfoNavBar, ProductInfoMessage, ProductInfoShop},

    data() {
      return {
        proInfoId: null,//商品id
        swiperArr: [],//轮播图数组
        banners: null,
        //商品信息
        productInfo: {
            title: '', //商品标题
            newPrice:
              '',//新的价格
            oldPrice:
              '',//旧价格
            discountDesc:
              '',//折扣
            columns:
              '',//销量等等
            services:
              '',//服务相关
          },
        //商家信息
        shop: {
          logo: '', //头像
          name:
            '', //名字
          fans:
            '', //粉丝
          sells:
            '', //总销量
          score:
            '', //评分
          goodsCount:
            '', //商品数量
          shopUrl:
            '' //店铺链接

        },
        //商品图片展示区域
        showImgs:[],
        //参数信息
        params:{
          info:[], //产品参数
          rule:[] //产品尺码
        }
      }
    },
    created() {
      this.proInfoId = this.$route.query.id
      this.getProductInfoData()
    },
    mounted() {
      this.banners = new BScroll(this.$refs.wrap, {click: true})
    },
    methods: {
      //获取商品详情数据
      getProductInfoData() {
        this.request({
          method: 'get',
          url: this.url.productInfo,
          params: {
            iid: this.proInfoId
          }
        }).then(res => {
          const data = res.result
          //轮播图数据赋值
          this.swiperArr = data.itemInfo.topImages
          //商品信息赋值
          this.productInfo.title = data.itemInfo.title
          this.productInfo.newPrice = data.itemInfo.price
          this.productInfo.oldPrice = data.itemInfo.oldPrice
          this.productInfo.discountDesc = data.itemInfo.discountDesc
          this.productInfo.discountBgColor = data.itemInfo.discountBgColor
          this.productInfo.columns = data.columns
          this.productInfo.services = data.shopInfo.services

          //赋值上商家信息
          this.shop.logo = data.shopInfo.shopLogo;
          this.shop.name = data.shopInfo.name;
          this.shop.fans = data.shopInfo.cFans;
          this.shop.sells = data.shopInfo.cSells;
          this.shop.score = data.shopInfo.score;
          this.shop.goodsCount = data.shopInfo.cGoods
          this.shop.shopUrl = data.shopInfo.shopUrl

          //赋值商品图片
          this.showImgs=data.detailInfo.detailImage[0].list

          //产品参数赋值
          this.params.info = data.itemParams.info.set
          this.params.rule = data.itemParams.rule.tables
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
    .product-info {
        position: relative;
        z-index: 1000;
        background-color: #fff;
    }

    .wrap {
        /*background-color: red;*/
        height: calc(100vh - 44px);
    }

</style>