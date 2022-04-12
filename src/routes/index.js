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
        {
            path: '/Signup',
            name: 'Signup',
            component:()=> import('@/components/Signup')
        },
        {
            path: '/Login',
            name: 'Login',
            component:()=> import('@/components/Login')
        },
        {
            path: '/Order',
            name: 'Order',
            component:()=> import('@/components/OrderProduct')
        },
        {
            path: '/OrderSuccess',
            name: 'OrderSuccess',
            component:()=> import('@/components/OrderSuccess')
        },
        {
            path: '/EditProfile',
            name: 'EditProfile',
            component:()=> import('@/components/EditProfile')
        },
        {
            path: '/ListOrder',
            name: 'ListOrder',
            component:()=> import('@/components/ListOrder')
        },
    ],
    mode:"history"
})