import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path: '/',
            name: 'ListProducts',
            component:()=> import('@/components/ListProducts')
        },
        {
            path: '/ProductDetail',
            name: 'ProductDetail',
            component:()=> import('@/components/ProductDetail')
        },
        {
            path: '/CartProducts',
            name: 'CartProducts',
            component:()=> import('@/components/CartProducts')
        },
    ],
    mode:"history"
})