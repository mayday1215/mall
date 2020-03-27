<template>
    <div class="shop">
        <div class="shop-top">
            <img :src="shop.logo">
            <span class="shop-name">{{shop.name}}</span>
        </div>
        <div class="shop-center">
            <div class="shop-center-left">
                <div class="shop-sells">
                    <div class="shop-sells-count">{{shop.sells < 10000 ? shop.sells : (shop.sells / 10000).toFixed(1) + "万" }}</div>
                    <div class="shop-sells-text">总销量</div>
                </div>
                <div class="shop-goods">
                    <div class="shop-goods-count">{{shop.goodsCount}}</div>
                    <div class="shop-goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="shop-center-right">
                <table>
                    <tr v-for="(item,index) in shop.score" :key="index">
                        <td class="name">{{item.name}}</td>
                        <td class="score" :class="{fontGreen:item.isBetter}">{{item.score}}</td>
                        <td class="judge" :class="{bgcGreen:item.isBetter}">
                            {{item.isBetter ? '高' : '低'}}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
            <a :href="shop.shopUrl" class="enter">进店逛逛</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProductInfoShop",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .shop{
        padding: 20px 8px;
        border-bottom: 5px solid rgba(100,100,100,.1);

    }
    .shop img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border:1px solid rgba(0,0,0,.1);

    }
    .shop .shop-name{
        margin-left: 10px;
        font-size: 13px;
        font-weight: bold;
    }
    .shop .shop-center{
        margin-top: 15px;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 10px;
    }
    .shop .shop-center .shop-center-left,
    .shop .shop-center .shop-center-right{
        width: 50%;

    }
    /*左边*/
    .shop .shop-center .shop-center-left{
        /*background: blue;*/
        border-right: 1px solid rgba(0,0,0,.1);
        display: flex;
        text-align: center;
    }
    .shop .shop-center .shop-center-left .shop-sells{
        flex: 1;
    }
    .shop .shop-center .shop-center-left .shop-sells .shop-sells-count,
    .shop .shop-center .shop-center-left .shop-goods .shop-goods-count{
       color: #999;

    }
    .shop .shop-center .shop-center-left .shop-sells .shop-sells-text,
    .shop .shop-center .shop-center-left .shop-goods .shop-goods-text{
        font-size: 12px;

    }
    .shop .shop-center .shop-center-left .shop-goods{
        flex: 1;
    }

    /*右边*/
    .shop .shop-center .shop-center-right{
        /*background: pink;*/
        text-align: center;
    }
    .shop .shop-center .shop-center-right table{
        margin: auto;
        font-size: 12px;
    }
    .shop .shop-center .shop-center-right .judge{
        background: yellowgreen;
        color: #fff;
    }
    .shop .shop-center .shop-center-right .score{
        color: yellowgreen;
    }

    .fontGreen{
        color: red !important;
    }
    .bgcGreen{
        background-color: red !important;
    }

    .shop-bottom{
        margin-top: 10px;
    }
    .shop-bottom .enter{
        display: block;
        width: 150px;
        height: 30px;
        background-color: #f2f5f8;
        text-align: center;
        margin: auto;
        line-height: 30px;
        border-radius: 10px;
        font-size: 14px;
    }
</style>