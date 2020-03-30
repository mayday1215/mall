<template>
    <div class="cart">
        <cart-nav-bar></cart-nav-bar>
        <cart-list></cart-list>
    </div>
</template>

<script>
  import CartNavBar from "./children/CartNavBar";
  import CartList from "./children/CartList";

  export default {
    name: "Cart",
    components: {CartNavBar,CartList}
  }
</script>

<style scoped>

</style>