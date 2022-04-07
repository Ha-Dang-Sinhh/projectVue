<template>
  <div>
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
              <router-link :to="{name:'ProductDetail',query:{id:lastProductsItem.id}}">
                <button class="p-2 text-md bg-gray-900 text-white" @click="getId()">
                  Add To Cart
                </button>
              </router-link>
              <button class="p-2 text-md bg-gray-900 text-white ml-2"><i class="fa-solid fa-share-nodes"></i></button>
            </div>
          </div>
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
    },
    getId(id){

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