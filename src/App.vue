<template>
  <div id="app">
    <!-- <ListProducts></ListProducts> -->
    <CartProducts></CartProducts>
  </div>
</template>

<script>
// import ListProducts from './components/ListProducts.vue'
import CartProducts from './components/CartProducts.vue'
export default {
  name: 'App',
  components: {
    // ListProducts,
    CartProducts,
  }
}
</script>

<style>
#app {
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
</style>
