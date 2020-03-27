<template>
    <div class="pro-info">
        <p class="title">{{productInfo.title}}</p>
        <div class="other">
            <span class="new-price">{{productInfo.newPrice}}</span>
            <span class="old-price">{{productInfo.oldPrice}}</span>
            <span class="discountDesc">{{productInfo.discountDesc}}</span>
        </div>
        <div class="data">
            <span>{{productInfo.columns[0]}}</span>
            <span>{{productInfo.columns[1]}}</span>
            <span>{{productInfo.columns[2]}}</span>
        </div>
        <div class="service">
            <span class="service-item" v-for="(item,index) in productInfo.services" :key="index">
                <img :src="item.icon">
                <span>{{item.name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ProductInfoMessage",
    props: {
      productInfo: {
        type: Object,
        default() {
          return {}
        }
      }

    }
  }
</script>

<style scoped>
    .pro-info {
        box-sizing: border-box;
        padding: 5px;
    }

    .pro-info .title{
        font-size: 18px;
        font-weight: bold;
        color: #333333;
    }
    .other{
        /*background: yellowgreen;*/
        margin: 10px 0;
    }
    .other .new-price{
        color: #ff5777;
        font-size: 16px;
    }
    .other .old-price{
        font-size: 12px;
        text-decoration: line-through;
        margin: 0 6px;
        color: #999;
    }
    .other .discountDesc{
        font-size: 12px;
        background: #ff5777;
        color: #fff;
        border-radius: 5px;
        padding: 2px;

    }
    .data{
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 13px;
        border-bottom: 1px solid rgba(100,100,100,.5);
        line-height: 30px;

    }
    .data span{
        flex: 1;

    }
    .service{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-bottom: 5px solid rgba(100,100,100,.1);
        line-height: 30px;

    }
    .service .service-item{
        /*flex: 1;*/
        width: 33.333%;
    }
    .service .service-item img {
        width: 15px;
        height: 15px;
    }
    .service .service-item span {
        font-size: 13px;
    }

</style>