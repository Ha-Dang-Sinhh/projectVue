<template>
  <div class="bg-white p-8 rounded-md w-full mt-8">
    <div class=" flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">Products Oder</h2>
        <span class="text-xs">All products item</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex bg-gray-50 items-center p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
               fill="currentColor">
            <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd" />
          </svg>
          <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">
        </div>
<!--        <div class="lg:ml-40 ml-10 space-x-8">-->
<!--          <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>-->
<!--          <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>-->
<!--        </div>-->
      </div>
    </div>
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
            <tr>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Mã đơn
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Address
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                quantity
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created at
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                SĐT
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                total
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(listOrderItem,listOrderIndex) in listOrder" :key="listOrderIndex">
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-auto h-auto">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{listOrderItem.id}}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-auto h-auto">
                    <p class="text-gray-900 whitespace-no-wrap" v-for="(listOrderProductItem,listOrderProductIndex ) in listOrderItem.products" :key="listOrderProductIndex">
                      <span>{{listOrderProductItem.name}}</span>
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
<!--                  <div class="flex-shrink-0 w-10 h-10">-->
<!--                    <img class="w-full h-full rounded-full"-->
<!--                         src=""-->
<!--                         alt="" />-->
<!--                  </div>-->
                  <div class="w-auto ml-3">
                    <p class="w-auto text-gray-900 whitespace-no-wrap">
                      {{listOrderItem.address}}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap" v-for="(listOrderProductItem,listOrderProductIndex ) in listOrderItem.products" :key="listOrderProductIndex">
                  <span class="">{{listOrderProductItem.quantity}}</span>
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{listOrderItem.created_at}}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{listOrderItem.phone}}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  ${{listOrderItem.sub_total}}.00
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                      class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                       <span aria-hidden class="absolute inset-0 opacity-50 rounded-full" :class="listOrderItem.status == 1? 'bg-orange-200':
                             listOrderItem.status == 2?'bg-green-600':
                             listOrderItem.status== 3?'bg-blue-500':
                             listOrderItem == 4 ? 'bg-green-300':'bg-red-400'"></span>
									<span class="relative" v-if="listOrderItem.status==1">Pending</span>
									<span class="relative" v-if="listOrderItem.status==2">Processing</span>
									<span class="relative" v-if="listOrderItem.status==3">Sent</span>
									<span class="relative" v-if="listOrderItem.status==4">Received</span>
									<span class="relative" v-if="listOrderItem.status==5">Cancel</span>
									</span>
              </td>
            </tr>
            </tbody>
          </table>
          <div
              class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                  class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                  Xoay Xoay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {authService} from "@/services/authService";

export default {
  name: "ListOrder",
  data(){
    return{
      listOrder:[],
      listOrder2:[],
      scroll:0,
      id:1,

    }
  },
  methods:{
    async getListOrder(){
      const respListOrder =  await authService.getListOrder(this.id);
      this.listOrder = respListOrder.data.data;
      console.log(this.listOrder);
    },
    async handleScroll(){
      let isLoad = false;
      if(window.scrollY + window.innerHeight >= document.body.scrollHeight ){
        isLoad = true;
        const respListOrderPage =  await authService.getListOrder(this.id+=1);
        this.listOrder2 = respListOrderPage.data.data;
        this.listOrder = [...this.listOrder,...this.listOrder2];
        isLoad = false;
      }
    }
  },
  mounted() {
    this.getListOrder();
    window.addEventListener("scroll",this.handleScroll);
  }
}
</script>

<style scoped>

</style>