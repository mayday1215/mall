<template>
    <div>
        <nav-bar class="nav" v-if="$store.state.cartData.length > 0">
            <div slot="center">购物车({{$store.state.cartData.length}})</div>
        </nav-bar>
        <nav-bar class="nav" v-else>
            <div slot="center">购物车</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/navbar/NavBar";
  export default {
    name: "CartNavBar",
    components: {NavBar},
    created() {
      console.log(this.$store.state.cartData)
    }
  }
</script>

<style scoped>
.nav{
    background-color: #ff5777;
    color: #ffffff;
}
</style>