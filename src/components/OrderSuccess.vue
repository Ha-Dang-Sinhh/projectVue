<template>
  <div>
    <div class="w-80 mx-auto my-44 ">
      <h1 class="w-80 text-2xl ">Bạn đã đặt hàng thành công !</h1>
      <button class="h-12 px-5 rounded-full mt-5 ml-12 text-white bg-blue-500" @click="gotoProducts()">Quay về trang chủ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderSuccess",
  methods:{
    gotoProducts(){
      window.location.href = '/';
    }
  }
}
</script>

<style scoped>

</style>