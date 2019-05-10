import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Personal from '@/pages/personal/Personal'
import Register from '@/pages/login/Register'
import Commodity from '@/pages/commodity/Commodity'
import Search from '@/pages/commodity/Search'
import ShoppingCart from '@/pages/cart/ShoppingCart'
import CommodityInfo from '@/pages/commodity-info/CommodityInfo'
import OrderMain from '@/pages/order/OrderMain'
import Buy from '@/pages/buy/Buy'
import AddressMain from '@/pages/address/AddressMain'
import AddressDetail from '@/pages/address/AddressDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/commodity/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart
    },
    {
      path: '/commodity/:id',
      name: 'CommodityInfo',
      component: CommodityInfo
    },
    {
      path: '/order',
      name: 'OrderMain',
      component: OrderMain
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/address',
      name: 'AddressMain',
      component: AddressMain
    },
    {
      path: '/addressDetail',
      name: 'AddressDetail',
      component: AddressDetail
    }
  ]
})
