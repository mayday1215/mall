<template>
    <div class="feature">
        <div class="feature-item" v-for="item in recommend" :key="item.acm">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Recommend",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .feature {
        width: 100vw;
        display: flex;
        padding: 10px 0;
        border-bottom: 10px solid #eee;
    }

    .feature .feature-item {
        flex: 1;
        text-align: center;
    }

    .feature .feature-item a {
        font-size: 13px;
        color: #666;
    }

    .feature .feature-item a img {
        width: 80px;
        margin-bottom: 10px;
    }


</style>