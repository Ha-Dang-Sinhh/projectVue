<template>
  <div class="container mx-auto">

    <div class="lg:mx-24 mx-5 my-10">
        <div class="grid lg:grid-cols-7 grid-cols-1 gap-4 space-x-5">
        <div class="grid grid-cols-2 col-span-3 gap-4 space-x-5">
            <div class="col-span-5">
                <img class="w-full h-96 object-cover" :src="imgCart" alt="">
            </div>
            <div class="flex gap-5" >
                <img class="w-20 cursor-pointer" :src="imgCartProducts.full_image_path" alt="Nike Jordan 3-image-6" @click="handleImgCart(imgCartProducts.full_image_path)" v-for="(imgCartProducts,indexCartProducts) in cartProducts.images" :key="indexCartProducts" />
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

              <router-link :to="{name:'CartProducts',query:{cartProducts:cartProducts}}">
                <button class="border border-gray-800 text-black p-2 text-xl" >
                  Add To Cart
                </button>
              </router-link>
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
  </div>
</template>

<script>
import {homeService} from '@/services/homeSevice';
import {Axios} from "@/services/Axios";
export default {
    data(){
        return{
            cartProducts:[],
            mightYouLikeProducts:[],
            imgCart :'',
            homeData:[],
            productId:0
        }
    },
    methods: {
        // getData(){
        //     fetch('http://128.199.211.17/api/v1/products/4')
        //       .then((response) =>response.json())
        //       .then((data) =>{
        //        this.cartProducts = data.product;
        //         this.mightYouLikeProducts = data.mightYouLikeProducts;
        //         this.imgCart = this.cartProducts.images[0].full_image_path
        //       })
        // },
      async getData(){
        try{
          const resp = await Axios.get(`http://128.199.211.17/api/v1/products/${this.productId}`);
          this.cartProducts = resp.data.product;
          this.mightYouLikeProducts = resp.data.mightYouLikeProducts;
          this.imgCart = this.cartProducts.images[0].full_image_path;
          console.log(resp.data);
        }catch(e) {
          console.log(e);
        }
      },
      handleImgCart(img){
        this.imgCart = img;
      },
    },
    mounted() {
        this.productId = this.$route.query.id;
        this.getData();
        console.log(this.productId);
    },
  components: {

  }
}
</script>

<style>

</style>