<template>
    <div class="home">
        <!-- 头部导航-->
        <NavBar class="nav-bar">
            <div slot="center">购物街</div>
        </NavBar>

        <tab-control :tab-items="['流行','新款','精选']"
                     @itemClick="goodsItemClick"
                     ref="control2"
                     class="control2"
                     v-show="controlShow"
        ></tab-control>
        <!--BS滚动区域-->
        <div class="wrap" ref="wrap">
            <div class="content">



                <!--轮播图-->
                <home-swiper :banners="banners"></home-swiper>
                <!--精品推荐区域-->
                <home-recommend :recommend="recommend"></home-recommend>
                <!--流行图片-->
                <home-fashion></home-fashion>
                <!--tab切换-->
                <tab-control :tab-items="['流行','新款','精选']"
                             @itemClick="goodsItemClick"
                             ref="control1"
                ></tab-control>
                <!--            &lt;!&ndash;商品展示区域&ndash;&gt;-->
                <goods-list :goods="goodsList[goodsListType].list" :bscroll="bscroll"></goods-list>
            </div>
        </div>
        <!--返回顶部图标-->
        <div class="backTop" v-show="backTopFlag" @click="backTopClick">
            <img src="~assets/img/common/top.png" alt="">
        </div>
    </div>
</template>

<script>

  import NavBar from "../../components/navbar/NavBar";
  import HomeSwiper from "./children/HomeSwiper";
  import HomeRecommend from "./children/HomeRecommend";
  import HomeFashion from "./children/HomeFashion";
  import TabControl from "../../components/tabcontrol/TabControl";
  import GoodsList from "../../components/goodslist/GoodsList";
  import BScroll from "better-scroll";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFashion,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],//轮播图数据
        recommend: [], //推荐精品数据
        goodsList:{
          pop:{list:[],page:1},
          new:{list:[],page:1},
          sell:{list:[],page:1},
        },
        goodsListType:'pop',
        bscroll:null,
        backTopFlag:false,
        controlShow:false
      }
    },
    created() {
      this.getBannersAndReommendData()
      this.getGoodsList("pop",1)
      this.getGoodsList("new",1)
      this.getGoodsList("sell",1)
    },
    mounted(){
      this.bscroll = new BScroll(this.$refs.wrap,{
        click:true,
        pullUpLoad:true,
      })
      //上拉加载更多
      this.pullUpData()
      //下拉显示backTop
      this.backTop()
    },
    methods: {
      //获取banner和recommend数据
      getBannersAndReommendData() {
        this.request({
          method: 'get',
          url: this.url.multidata
        }).then(data => {
          this.banners = data.data.banner.list
          this.recommend = data.data.recommend.list
        })
      },
      //获取首页商品数据
      getGoodsList(type,page){
        this.request({
          url:this.url.homeGoods,
          params:{
            type:type,
            page:page
          }
        }).then(data => {
          // this.goodsList[type].list = data.data.list
          // this.goodsList[type].list.push(data.data.list)
          data.data.list.forEach(item => {
            this.goodsList[type].list.push(item)
            this.bscroll.finishPullUp()
          })
        })
      },
      //点击tab切换数据
      goodsItemClick(index){
        switch (index) {
          case 0:
            this.goodsListType = "pop"
            break
          case 1:
            this.goodsListType = "new"
            break
          case 2:
            this.goodsListType = "sell"
            break
        }
        this.$refs.control1.activeIndex = index
        this.$refs.control2.activeIndex = index
      },
      //上拉加载更多
      pullUpData(){
        this.bscroll.on("pullingUp",() => {
          const newPage = this.goodsList[this.goodsListType].page++;
          this.getGoodsList(this.goodsListType,newPage)


        })
      },
      //下拉显示backTop
      backTop(){
        this.bscroll.on("scroll",(position) => {
          //是否显示返回顶部按钮
          this.backTopFlag = -position.y >= 1500
          // console.log(this.$refs.control.$el.offsetTop)
          // console.log(-position.y)
          //是否吸顶
          this.controlShow = -position.y >= this.$refs.control1.$el.offsetTop
        })
      },
      //backTop点击
      backTopClick(){
        console.log(213)
        this.bscroll.scrollTo(0,0,300)
      }
    }
  }
</script>

<style scoped>
    .home{
        position: relative;
    }
    .nav-bar {
        background-color: #ff5777;
        color: #fff;
    }
    .wrap{
        /*height: 200px;*/
        height: calc(100vh - 93px);
        /*background: red;*/
        overflow: hidden;
        margin-top: 44px;
        /*position: absolute;*/
        /*top: 44px;*/
        /*bottom: 49px;*/
        /*left: 0;*/
        /*right: 0;*/
    }

    .backTop img{
        width:48px;
        height: 48px;
        position: fixed;
        z-index: 999;
        right: 7px;
        bottom: 49px;
        opacity: 0.7;
    }
    .control2{
        /*background: red;*/
        position: absolute;
        z-index: 9;
        background: #fff;
    }


</style>