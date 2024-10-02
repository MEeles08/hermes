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
    path: "/add",
    name: "add",
    component: () => import("./components/AddBlog"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
