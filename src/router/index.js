import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "about",
    component: () => import("@/views/frontend/discovery.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
