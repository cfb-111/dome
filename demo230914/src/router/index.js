//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory } from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
import { useUserStore } from '@/store/user';

//创建路由 route
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
import Index from "@/views/Index.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const routes = [
   {
      path: '/',
      component: Index
   },
   {
      path: '/login',
      component: Login
   },
   {
      path: '/register',
      component: Register
   },
   {
      path: '/articleDetail',
      component: () => import('@/views/users/ArticleDetail.vue'),
   },
   {
      path: '/user',
      component: () => import('@/views/users/User.vue'),
   },
   {
      path: '/user-article',
      component: () => import('@/views/users/ArticleList.vue'),
   }
]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
   history: createWebHashHistory(),
   routes,
});

// //路由守卫
router.beforeEach((to, from, next) => {
   const userStore = useUserStore();
   let userInfo = userStore.getUserInfo;
   if (userInfo === null) {
      if (to.path === "/login") {
         next();
      } else {
         router.push("/login")
      }
   } else {
      next();
   }
});

//导出路由
export default router;