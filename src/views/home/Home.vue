<template>
    <div>
        <NavBar class="nav-bar">
            <div slot="center">购物街</div>
        </NavBar>
    </div>
</template>

<script>
  import NavBar from "../../components/navbar/NavBar";
  export default {
    name: "Home",
    components:{
      NavBar
    },
    mounted() {

    }
  }
</script>

<style scoped>
    .nav-bar{
        background-color: #ff5777;
        color: #fff;
    }

</style>