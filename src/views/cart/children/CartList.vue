<template>
    <div class="cart-list">

        <div class="wrap" ref="wrap">
            <div class="content">
                <div class="list-item" v-for="(item,index) in $store.state.cartData" :key="item.iid"  >
                    <div class="item-select">
                        <img src="~/assets/img/cart/tick.svg" alt="" :class="{checked:item.isChecked}"
                             @click="checkClick(item.iid)">

                    </div>
                    <div class="item-img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="item-info">
                        <div class="title">{{item.title}}</div>
                        <div class="desc">{{item.desc}}</div>
                        <div class="bottom">
                            <div class="price">￥{{item.price}}</div>
                            <div class="count">X{{item.count}}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "CartList",
    data(){
      return {
        banners: null,
      }
    },
    mounted() {

      this.banners = new BScroll(this.$refs.wrap,{
        click:true
      })
    },
    methods:{
      checkClick(id){
        console.log(123)
        this.$store.commit("updateCartCheck",id)
      }
    }

  }
</script>
<style scoped>
    .wrap{
        height: calc(100vh - 93px);
    }
    .cart-list {
        /*background-color: yellow;*/
        margin-top: 44px;
        height: 100vh;
        width: 100vw;
    }
    .list-item{

    }
    .item-select{ position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-select img{
        width: 18px;
        height: 18px;
        border: 2px solid #ccc;
        border-radius: 50%;
    }

    .list-item {
        display: flex;
        padding: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, .3);
    }

    .item-select {
        width: 14%;
        /*background-color: blue;*/
    }
    .item-img{}
    .item-img img {
        width: 80px;
        height: 100px;
        border-radius: 5px;
        display: block;
    }
    .item-info {
        padding: 5px 10px;
        /*background-color: blue;*/
        overflow: hidden;
    }
    .title,.desc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .desc{
        font-size: 12px;
        color: #666;
        margin-top: 15px;
    }
    .bottom{
        margin-top: 20px;
        /*background-color: yellow;*/
        display: flex;
        justify-content: space-between;
    }
    .bottom .price{
        color: orangered;
        font-size: 14px;
    }
    .bottom .count{
        font-size: 14px;
    }
    .checked{
        background-color: #ff5777;
    }
</style>