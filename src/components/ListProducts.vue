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
          <img src="./../assets/nav.svg" alt="">
        </div>
        <div class=" relative">
          <span class="w-6 h-6 rounded-full flex justify-center -top-3 -right-3 items-center bg-green-400 absolute ">0</span>
          <i class="fa-solid fa-cart-plus text-2xl"></i>
        </div>
      </div>

    </div>
    <div class="my-5 mx-5 md:mx-10">
      <h3 class="text-2xl font-semibold">Sản Phẩm Mới Nhất</h3>
    </div>
    <div class=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-10 mx-5" >
      <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(lastProductsItem,index) in lastProducts" :key="index" >
        <img class="w-full h-72 object-cover" :src="lastProductsItem.image.full_image_path" alt="">
        <div class="mx-3 my-2 ">
          <div class="flex justify-between items-center">
            <h6 class="text-xl font-semibold">{{lastProductsItem.name}}</h6>
            <i class="fa-solid fa-heart"></i>
          </div>
          <span class="text-xl font-semibold my-4 inline-block">{{lastProductsItem.price}}</span>
          <div class="flex justify-between items-center">
            <div class="flex">
              <span class="inline-block ">-</span>
              <span class="w-8 text-center text-md border border-indigo-200 inline-block ml-1 rounded ">1</span>
              <span class="inline-block ml-1">+</span>
            </div>
            <div class="gap-1 flex">
              <button class="p-2 text-md bg-gray-900 text-white">Add To Cart</button>
              <button class="p-2 text-md bg-gray-900 text-white ml-2"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: 'ChildComponent',
  data(){
    return{
      lastProducts:[],
    }
  },
  methods: {
    getData(){
      fetch('http://128.199.211.17/api/v1/home')
      .then((response) =>response.json())
      .then((data) =>{
        this.lastProducts = data.lastProducts;
        console.log(this.carts);
      })
    }
  },
  components: {

  },
  mounted() {
    this.getData();
  }
}
</script>

<style>

</style>