import { createRouter, createWebHistory  } from "vue-router"

const router = createRouter({
  history: createWebHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout/index.vue"),
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
    {
      path: "/filmdetail",
      component: () => import("@/views/Film/index.vue"),
    },
    {
      path: "/user",
      component: () => import("@/views/User/index.vue"),
      children: [
        {
          path: "/user",
          component: () => import("@/views/User/UserInfo/index.vue"),
        },
        {
          path: "/user/orderlist",
          component: () => import("@/views/User/OrderList/index.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: () => import("@/views/Admin/index.vue"),
      children: [
        {
          path: "/admin",
          component: () => import("@/views/AdminLayout/index.vue"),
        },
        {
          path: "/admin/film",
          component: () => import("@/views/FilmAdmin/index.vue"),
          redirect:'/film/uploadfilm',
          children: [
            {
              path: '/film/uploadfilm',
              component: ()=>import('@/views/UploadFilm/index.vue')
            },
            {
              path: '/film/editfilm/:id',
              component: () => import('@/views/EditPage/index.vue'),
              props: true
            },
            {
              path: '/film/addtheatre',
              component:()=>import('@/views/AddTheatre/index.vue')
            }
          ]
        },
        {
          path: "/admin/snack",
          component: () => import("@/views/SnackManger/index.vue"),
        },
      ],
    },
  ],
})

export default router
