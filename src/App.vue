<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "components/maintabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  body,html,h1,h2,h3,h4,p{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img{
    vertical-align: middle;
  }
  .clear::after{
    content: "";
    display: block;
    clear: both;
  }
  a{
    text-decoration: none;
    color: #000;
  }



</style>
