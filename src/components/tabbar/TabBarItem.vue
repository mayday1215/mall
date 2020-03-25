<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon_active"></slot>
    </div>
    <div :style="styleActive">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      textColor: {
        type: String,
        default: '#ff5777'
      }
    },
    data() {
      return {}
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
        console.log(this.$route)
      }
    },
    computed: {
      isActive() {
        return this.$route.path !== this.path
      },
      styleActive() {
        return !this.isActive ? {color: this.textColor} : {}
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 13px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: auto;
    margin-top: 3px;
    margin-bottom: 2px;
  }

  /*.itemText{*/
  /*  color: #ff5777;*/
  /*}*/

</style>
