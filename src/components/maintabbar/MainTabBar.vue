<template>
    <tab-bar>
        <tab-bar-item text-color="#ff5777" path="/home">
            <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon_active">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item text-color="#ff5777" path="/category">
            <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon_active">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item text-color="#ff5777" path="/cart">
            <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-icon_active">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item text-color="#ff5777" path="/user">
            <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon_active">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from "components/tabbar/TabBar";
  import TabBarItem from "components/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>