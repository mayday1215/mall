<template>
    <div>
        <h1>分类</h1>
        <div class="warp">

            <ul>
                <li>1内容</li>
                <li>2内容</li>
                <li>3内容</li>
                <li>4内容</li>
                <li @click="liclick">5内容</li>
                <button @click="dj">点击</button>

                <li>6内容</li>
                <li>7内容</li>
                <li>8内容</li>
                <li>9内容</li>
                <li>10内容</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
  export default {
    name: "Category",
    mounted() {
        const scroll = new BScroll('.warp',{
            click:true,
            pullUpLoad:true,
          probeType:3
        })
        scroll.on("pullingUp",function () {
          // console.log("上拉加载更多")
          scroll.finishPullUp()
        })
        scroll.on("scroll",(position)=>{
          console.log(position)
        })
    },
    methods:{
      dj(){
        console.log(123)
      },
      liclick(){
        console.log("li的单击是见")
      }
    }
  }
</script>

<style scoped>
    .warp{
        height: 150px;
        background: yellowgreen;


    }

</style>