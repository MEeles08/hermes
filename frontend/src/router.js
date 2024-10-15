import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home"),
  },
  {
    path: "/blogs",
    alias: "/blogs",
    name: "blogs",
    component: () => import("./components/BlogsList"),
  },
  {
    path: "/blogs/:id",
    name: "blog-details",
    component: () => import("./components/Blog"),
  },
  {
    path: "/blogs/sanity/:id",
    name: "blog-details",
    component: () => import("./components/SanityBlog"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddBlog"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
