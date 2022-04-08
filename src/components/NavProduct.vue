<template>
  <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10">
    <img class="w-16 h-16 " src="https://2momart.vn/upload/medium/042020/ma-giam-gia-shopee.png" alt="">
    <div class="flex items-center gap-4">
      <div class="md:inline-block hidden">
        <ul class="flex items-center gap-4 ">
          <li><a href="">Thông báo</a></li>
          <li><a href="">Sản phẩm</a></li>
          <li><a href="">ProVip</a></li>
          <router-link :to="{name:'Signup'}">
            <li><a href="">Đăng ký</a></li>
          </router-link>
          <router-link :to="{name:'Login'}">
            <li><a href="">Đăng nhập</a></li>
          </router-link>
        </ul>
      </div>

      <div class="md:hidden inline-block ">
        <i class="fa-solid fa-bars text-2xl"></i>
      </div>
      <div class=" relative">
        <span class="w-6 h-6 rounded-full text-white flex justify-center -top-3 -right-3 items-center bg-red-500 absolute ">0</span>
        <router-link :to="{name:'CartProducts'}">
          <i class="fa-solid text-amber-600 fa-cart-plus text-2xl"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavProduct"
}
</script>

<style scoped>

</style>