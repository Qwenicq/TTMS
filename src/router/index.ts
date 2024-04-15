import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:()=>import("@/views/Layout/index.vue")
  },
    {
      path: "/login",
      component: () => import("@/views/UserLogin/index.vue"),
    },
    {
      path: "/register",
      component: () => import("@/views/UserRegister/index.vue"),
    },
    {
      path: "/manger",
      component: () => import("@/views/SnackManger/index.vue"),
    },
  ],
})

export default router
