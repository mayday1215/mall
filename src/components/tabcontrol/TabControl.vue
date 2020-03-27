<template>
    <div class="tab-control">
        <div class="tab-control-item"
             v-for="(item,index) in tabItems"
             :key="index"
             @click="itemClick(index)"
             :class="{active:index === activeIndex}"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      tabItems:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        activeIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.activeIndex = index
        this.$emit("itemClick",index)
      }
    }
  }
</script>

<style scoped>
    .tab-control {
        width: 100vw;
        height: 40px;
        /*background: yellow;*/
        display: flex;
        text-align: center;
        line-height: 40px;

    }

    .tab-control-item {
        flex: 1;
    }

    .tab-control-item span {

        padding: 5px;
    }
    .active span {
        border-bottom: 3px solid #ff5777;
        color: #ff5777;
    }
</style>