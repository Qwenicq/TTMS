import { createRouter, createWebHistory  } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/filmdetail",
      component: () => import("@/views/Film/index.vue"),
    },
    {
      path: "/ticket",
      component: () => import("@/views/BuyTicket/index.vue"),
    },
    {
      path: '/snack',
      component:()=>import("@/views/BuySnack/index.vue")
  },
    {
      path: "/user",
      component: () => import("@/views/User/index.vue"),
      children: [
        {
          path: "/user",
          component: () => import("@/views/User/User/index.vue"),
        },
        {
          path: "/user/orderlist",
          component: () => import("@/views/User/OrderList/index.vue"),
        },
        {
          path: "/user/editinfo",
          component: () => import("@/views/User/UserInfo/index.vue"),
        }
      ],
    },
    {
      path: "/admin",
      component: () => import("@/views/Admin/index.vue"),
      children: [
        {
          path: "/admin",
          component: () => import("@/views/AdminLayout/index.vue"),
          redirect: '/admin/filmshow',
          children: [
            {
              path: '/admin/filmshow',
              component:()=>import('@/views/FilmShow/index.vue')
            },
            {
              path: '/admin/theatreshow',
              component:()=>import('@/views/TheatreShow/index.vue')
            }
          ]
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
          redirect:'/snack/list',
          children: [
            {
              path: '/snack/list',
              component:()=>import('@/views/SnackList/index.vue')
          },
            {
              path: '/snack/upload',
              component: () => import('@/views/SnackUpload/index.vue')
            }
          ]
        },
      ],
    },
  ],
})

export default router
