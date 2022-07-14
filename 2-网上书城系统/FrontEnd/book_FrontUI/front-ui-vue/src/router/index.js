import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/user/Login.vue'
import Register from '../components/user/Register.vue'
import Forget from '../components/user/Foget.vue'
import UseMail from '../components/user/UseMail'

import BookStore from '../views/BookStore'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsDetail from '../components/goods/GoodsDetail.vue'

import OrderConfirm from '../components/order/OrderConfirm.vue'
import OrderFinish from '../components/order/OrderFinish.vue'

import MyInfo from '../components/userCenter/MyInfo'
import MyCenter from '../components/userCenter/MyCenter'
import Address from '../components/userCenter/Address'
import Comment from '../components/userCenter/Comment.vue'

import App from '../App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user/userLogin'
  },
  {
    path: '/user/userLogin',
    component: () => import('../components/user/UserLogin.vue')
  },
  // {
  //   path: '/user/login',
  //   component: Login
  // },

  {
    path: '/user/register',
    component: Register

  },
  {
    path: '/user/forget',
    component: Forget
  },
  {
    path: '/user/forget/useMail',
    component: UseMail
  }
  ,
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods',
    component: BookStore,
    children: [
      {
        path: 'goodsList',
        component: GoodsList
      },
      {
        path: 'goodsDetail',
        component: GoodsDetail
      },
    ]

  },

  {
    path: '/order',
    component: BookStore,
    children: [
      {
        path: 'orderConfirm',
        component: OrderConfirm
      },

      {
        path: 'orderFinish',
        component: OrderFinish

      },
    ]
  },



  {
    path: '/userCenter',
    component: BookStore,
    children: [
      {
        path: '/address',
        component: Address

      },
      {
        path: '/myCenter',
        component: MyCenter

      },
      {
        path: '/myInfo',
        component: MyInfo

      },
      {
        path: '/Comment',
        component: Comment

      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
