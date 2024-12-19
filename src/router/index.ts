import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '@/views/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import('@/views/MemoryDetailsPage.vue')
  },
  {
    path: '/memories/add',
    component: () => import('@/views/AddMemoryPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;