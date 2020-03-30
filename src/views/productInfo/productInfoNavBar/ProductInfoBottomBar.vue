<template>
    <div class="bottom">
        <div class="bottom-left">
            <div>
                <span class="icon service"></span>
                <span class="text">客服</span>
            </div>
            <div>
                <span class="icon shop"></span>
                <span class="text">店铺</span>
            </div>
            <div>
                <span class="icon like"></span>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bottom-right">
            <div class="addCart" @click="goCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProductInfoBottomBar",
    methods:{
      goCart(){
        this.$emit("addToCart")
      }
    }
  }
</script>

<style scoped>
    .bottom {
        width: 100vw;
        height: 58px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1001;
        display: flex;
        background: #fff;
        box-shadow: 0 -1px 1px rgba(0,0,0,.2);
    }

    .bottom .bottom-left {
        width: 52vw;
        display: flex;
    }
    .bottom .bottom-left div{
        flex: 1;
        text-align: center;
    }
    .bottom .bottom-left .icon{
        width: 22px;
        height: 22px;
        display: block;
        /*background-color: red;*/
        /*border: 1px solid;*/
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-size: 22px 150px;
        background-repeat: no-repeat;
        margin:10px auto 3px;
    }
    .service{
        background-position: 0 -53px;
    }
    .shop{
        background-position: 0 -98px;
    }
    .like{
        background-position: 0 0;
    }

    .bottom .bottom-left .text{
        font-size: 13px;
    }
    .bottom .bottom-right {
        /*background-color: yellowgreen;*/
        width: 48vw;
        display: flex;


    }

    .bottom .bottom-right .addCart{
        background-color: #FF8A00;
        width: 50%;
        height: 30px;
        margin-top: 14px;
        font-size: 13px;
        border-radius: 10px 0 0 10px;
        text-align: center;
        line-height: 30px;
        color: #fff;
    }
    .bottom .bottom-right .buy{
        background-color: #FF4400;
        width: 50%;
        height: 30px;
        margin-top: 14px;
        font-size: 13px;
        border-radius: 0 10px 10px 0;
        text-align: center;
        line-height: 30px;
        color: #fff;

    }
</style>