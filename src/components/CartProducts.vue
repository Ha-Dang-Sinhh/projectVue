<template>
  <div>
    <h2 class="block text-center text-2xl font-bold mt-2">Giỏ hàng</h2>
    <div >
      <div>
        <h6>Tên sản phẩm</h6>
        <h6>{{cartProducts.name}}</h6>
      </div>
      <div>
        <h6>Số Lượng</h6>
        <button @click="cartProducts.quantity--" :disabled="cartProducts.quantity ==1" >-</button>
        <span>{{cartProducts.quantity}}</span>
        <button @click="cartProducts.quantity++">+</button>
      </div>
      <div>
        <h6>Giá/1 đv</h6>
        <h6>{{cartProducts.price}}</h6>
      </div>
      <div>
        <h6>Tổng giá</h6>
        <h6>{{cartProducts.price * cartProducts.quantity}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProducts",
  data(){
    return{
      cartProducts:[],
    }
  },
  methods: {

  },
  mounted() {
    this.cartProducts = this.$route.query.cartProducts;
  },
}
</script>

<style scoped>

</style>