<template>
  <div class="container mx-auto">
    <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10">
      <img class="w-16 h-16 " src="https://2momart.vn/upload/medium/042020/ma-giam-gia-shopee.png" alt="">
      <div class="flex items-center gap-4">
        <div class="md:inline-block hidden">
          <ul class="flex items-center gap-4 ">
            <li><a href="">Thông báo</a></li>
            <li><a href="">Sản phẩm</a></li>
            <li><a href="">ProVip</a></li>
            <li><a href="">Đăng ký</a></li>
            <li><a href="">Đăng nhập</a></li>
          </ul>
        </div>

        <div class="md:hidden inline-block ">
          <i class="fa-solid fa-bars text-2xl"></i>
        </div>
        <div class=" relative">
          <span class="w-6 h-6 rounded-full flex justify-center -top-3 -right-3 items-center bg-red-500 absolute ">0</span>
          <i class="fa-solid fa-cart-plus text-2xl"></i>
          <!--          <img class="w-14 h-14" src="./../assets/cart.svg" alt="">-->
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="bg-gray-400">
      <div class=" mt-7 grid grid-cols-9 lg:ml-32 ml-5 py-10 gap-10">
        <div class="md:col-span-3 col-span-9">
          <img src="https://lucas.vn/wp-content/uploads/2021/06/shopee-logo-DD5CAE562A-seeklogo.com_.png" alt="" key="
          " class="w-18 h-16 ">
          <p class="font-bold mt-5">
            Công ty TNHH 1 thành viên Luân
          </p>
          <p class="font-bold">
            Địa chỉ: Hạ Long - Quảng Ninh
          </p>
          <p class="font-bold">
            SDT: 0868120192
          </p>
          <p class="font-bold">
            Fax: 0868120196
          </p>
        </div>
        <div class="md:col-span-3 col-span-9 my-auto md:ml-10 ml-0">
          <p class="font-bold">
            Về chúng tôi
          </p>
          <p class="font-bold">
            Chính sách mua hàng
          </p>
          <p class="font-bold">
            Chính sách trả hàng
          </p>
        </div>
        <div class="md:col-span-3 col-span-9 my-auto">
          <p>Mạng xã hội</p>
          <span><i class="fa-brands fa-facebook mr-3"></i></span>
          <span><i class="fa-brands fa-facebook mr-3"></i></span>
          <span><i class="fa-brands fa-facebook mr-3"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods:{

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
