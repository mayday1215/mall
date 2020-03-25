<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    height: 49px;
    background-color: #f2f2f2;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 2px rgba(100, 100, 100, .2);
  }


</style>
