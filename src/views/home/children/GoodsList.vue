<template>
    <div class="goods-list">
        <div class="goods-list-item"
             v-for="(item,index) in goods"
             :key="index"
             @click="goProdcutInfo(item.iid)">
            <img :src="item.show.img" @load="imgLoad">
            <div class="info">
                <p>{{item.title}}</p>
                <span class="price">{{item.price}}</span>
                <span class="like">{{item.cfav}}</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      },
      bscroll:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    created() {
      // console.log(this.goods)
    },
    methods:{
      //处理滚动bug
      imgLoad(){
        this.bscroll.refresh()
      },
      //跳转到商品详情页面
      goProdcutInfo(id){
        this.$router.push({
          path:"/productInfo",
          query:{
            id:id
          }
        })
      }
    }
  }
</script>

<style scoped>
    .goods-list{
        width: 100vw;
        /*background: yellow;*/
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow-x: hidden;
    }
    .goods-list-item{
        /*background: red;*/
        box-sizing: border-box;
        width: 50vw;
        /*height: 275px;*/
        padding: 5px;
        position: relative;
        padding-bottom: 45px;
        box-shadow: 0px 1px 2px rgba(0,0,0,.2);
        border-radius: 3px;
        margin: 5px 0;

    }
    .goods-list-item img{
        width: 100%;
    }
    .goods-list-item .info{
        width: 100%;
        position: absolute;
        bottom: 2px;
        text-align: center;



    }
    .goods-list-item .info p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #333;
    }
    .goods-list-item .info .price{
        font-size: 14px;
        color: #ff5777;


    }
    .goods-list-item .info .like{
        position: relative;
        margin-left: 20px;
        font-size: 13px;
        color: #666;
    }
    .goods-list-item .info .like::before{
        content: "";
        width: 14px;
        height: 14px;
        position: absolute;
        left: -13px;
        bottom: 2px;
        background-image:url("~assets/img/common/collect.svg") ;
        background-position: 0 0;
        background-size: 14px 14px;
        background-repeat: no-repeat;
    }
</style>