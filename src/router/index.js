import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "discovery",
    meta: { title: "Khám Phá" },
    component: () => import("@/views/frontend/discovery.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || "ZING MP3";
});

export default router;
