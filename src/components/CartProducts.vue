<template>
  <div>
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
<!--          <img class="w-14 h-14" src="./../assets/cart.svg" alt="">-->
        </div>
      </div>
    </div>
    <div class="lg:mx-24 mx-5 my-10">
        <div class="grid lg:grid-cols-7 grid-cols-1 gap-4 space-x-5">
        <div class="grid grid-cols-2 col-span-3 gap-4 space-x-5">
            <div class="col-span-5">
                <img class="w-full h-96 object-cover" :src="imgCart" alt="">
            </div>
            <div class="flex " v-for="(imgCartProducts,indexCartProducts) in cartProducts.images" :key="indexCartProducts">
                <img class="w-20" :src="imgCartProducts.full_image_path" alt="Nike Jordan 3-image-6" @click="handleImgCart(imgCartProducts.full_image_path)"/>
            </div>
        </div>
        
        <div class="col-span-4 space-y-7">
            <h1 class="text-3xl font-bold">Nike Jordan 3</h1>
            <p class="font-bold text-2xl text-red-500 text-left">              
                <span> 100</span>
            </p>

            <div class="flex space-x-2 items-center font-bold">
                <span class="bi bi-plus cursor-pointer" >-</span>
                <input
                    type="text" readonly="" class="quantity border rounded w-12 text-center font-medium"
                    value="1">
                <span class="bi bi-dash cursor-pointer">+</span>
                <button class="border border-gray-800 text-black p-2 text-xl" onclick="addItemToCart()">Add To
                    Cart
                </button>
            </div>
        </div>
    </div>
    <div class="my-20">
      <h6 class="font-bold text-2xl">Mô tả sản phẩm</h6>
      <p>{{cartProducts.short_desc}}</p>
    </div>
    <div>
      <h6 class="font-bold text-2xl">Có thể bạn sẽ thích</h6>
      <div class=" grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 mt-5">
        <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative" v-for="(mightYouLikeProductsItem,indexMightYouLikeProducts) in mightYouLikeProducts" :key="indexMightYouLikeProducts" >
        <img class="w-full h-72 object-cover" :src="mightYouLikeProductsItem.image.full_image_path" alt="">
        <div class="mx-3 my-2 ">
          <div class="flex justify-between items-center">
            <h6 class="text-xl font-semibold">{{mightYouLikeProductsItem.name}}</h6>
            <i class="fa-solid fa-heart"></i>
          </div>
          <span class="text-xl font-semibold my-4 inline-block">{{mightYouLikeProductsItem.price}}</span>
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
    data(){
        return{
            cartProducts:[],
            mightYouLikeProducts:[],
            imgCart :'',
        }
    },
    methods: {
        getData(){
            fetch('http://128.199.211.17/api/v1/products/4')
              .then((response) =>response.json())
              .then((data) =>{
               this.cartProducts = data.product;
                this.mightYouLikeProducts = data.mightYouLikeProducts;
                this.imgCart = this.cartProducts.images[0].full_image_path
              })
        },
        handleImgCart(img){
          this.imgCart = img;
        },
    },
    mounted() {
        this.getData();
    },
  components: {

  }
}
</script>

<style>

</style>