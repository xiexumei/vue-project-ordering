import Vue from 'vue'
import Router from 'vue-router'
const Msite =()=> import('../pages/Msite/Msite.vue')
const Order =()=> import('../pages/Order/Order.vue')
const Profile =()=> import('../pages/Profile/Profile.vue')
const Search =()=> import('../pages/Search/Search.vue')



//import Msite from '@/pages/Msite/Msite'
//import Order from '@/pages/Order/Order'
//import Profile from '@/pages/Profile/Profile'
//import Search from '@/pages/Search/Search'
import Login from '@/pages/Login/Login'
import UserInfo from '@/pages/UserInfo/UserInfo'
import Shop from '@/pages/shop/shop'
import ShopGoods from '@/pages/shop/shopGoods/shopGoods'
import ShopRatings from '@/pages/shop/shopRating/shopRating'
import ShopInfos from '@/pages/shop/shopInfo/shopInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
//name: 'HelloWorld',
      component: Msite,
      meta:{
         FooterGuide:true
      }
    },

    {
      path: '/Msite',
      component: Msite,
      meta:{
         FooterGuide:true
      }
    },

    {
      path: '/Order',
      component: Order,
      meta:{
         FooterGuide:true
      }
    },

     {
      path: '/Profile',
      component: Profile,
      meta:{
         FooterGuide:true
      }
    },


     {
      path: '/Search',
      component: Search,
      meta:{
         FooterGuide:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/userInfo',
      component: UserInfo
    },

    {
      path:'/shop',
      component: Shop,
      children:[
      {
        path:'/shop/goods',
        component:ShopGoods

      },
      {
        path:'/shop/ratings',
        component:ShopRatings

      },

      {
        path:'/shop/infos',
        component:ShopInfos

      }
      ]
    }
  ]
})
