import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Landing from './views/Landing.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;