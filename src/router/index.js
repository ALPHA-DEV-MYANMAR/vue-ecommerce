import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailCategories from "../components/DetailCategories";
import DetailProduct from "../components/DetailProduct";
import SingleProduct from "../components/SingleProduct";
import Dashboard from "../components/Admin/Dashboard";
import Cart from "../components/Cart";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detailcats/:id',
    name: 'DetailCategories',
    component: DetailCategories
  },
  {
    path: '/product',
    name: 'DetailProduct',
    component: DetailProduct
  },
  {
    path: '/singleproduct/:id',
    name: 'SingleProduct',
    component: SingleProduct
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard/cart',
    name: 'Cart',
    component: Cart
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
