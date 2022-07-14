import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student.vue'
import Admin from '../views/Admin.vue'
import store from '../store/index.js'
import api from '../../src/http/api.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/user/login'
  },
  // 3-管理员端
  {
    path: '/admin',
    component: Admin,

    meta: {},
    children: [

      {
        path: 'store',
        component: () => import('../components/admin/storeList.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/store',
              title: '店铺管理'
            }
          ]
        }
      },
      ,
      {
        path: 'book',
        component: () => import('../components/admin/bookList.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/major',
              title: '书籍管理'
            }
          ]
        }
      },
      {
        path: 'order',
        component: () => import('../components/admin/orderList.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/stuList',
              title: '订单管理'
            }
          ]
        }
      },
      {
        path: 'user',
        component: () => import('../components/admin/userList.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/academy',
              title: '用户管理'
            }
          ]
        }
      },
      {
        path: 'statistics',
        component: () => import('../components/admin/statistics.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/course',
              title: '统计数据'
            }
          ]
        }
      },

    ]
  },


  {
    path: '/user/login',
    component: () => import('../components/user/login.vue')
  },
  {
    path: '/user/register',
    component: () => import('../components/user/register.vue')
  },
  {
    path: '/user/update',
    component: () => import('../components/user/update.vue')
  },
]

const router = new VueRouter({
  routes
})


// 放前置守卫, 引进store 和 api, 如果local 里 没有token 
router.beforeEach(async (to, from, next) => {
  console.log(to.path);
  if (to.path.includes('/login')) {
    next()
  } else {
    // 不放行
    if (store.state.user.user) {
      // console.log('仓库里的role是')
      // console.log(store.state.user.user.role);
      next();
    } else {
      if (localStorage.token) {
        console.log('有token');
        let res = await api.users.getUserInfo();
        // console.log(res);
        // console.log(res.user);
        store.commit('user/CHANGE_USER', res.user)
      } else {
        router.push('/user/login')
      }
    }
  }
})

export default router
