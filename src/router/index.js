import { useAuthStore } from "@/stores";
import Home from "@/views/Home.vue";
import Landing from "@/views/Landing.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth/redirect",
    name: "AuthRedirect",
    beforeEnter: async (to, from, next) => {
      const authStore = useAuthStore();
      try {
        await authStore.handleOAuthRedirect();
        next({ name: "Home" });
      } catch (error) {
        console.error("Error during OAuth login:", error);
        next({ name: "Landing" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
