import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)


const Home = () => import("../views/home/Home")
const Category = () => import("views/category/Category")
const Cart = () => import("views/cart/Cart")
const User = () => import("views/user/User")
const ProductInfo = () => import("views/productInfo/ProductInfo")

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: "/home",
      component:Home
    },
    {
      path:'/category',
      component:Category,
    },
    {
      path:'/cart',
      component:Cart,
    },
    {
      path:'/user',
      component:User,
    },
    {
      path:'/productInfo',
      component:ProductInfo,
    }
  ]
})

export default router
