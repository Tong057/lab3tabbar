import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoginPage from '@/views/LoginPage.vue';
import LogoutPage from '@/views/LogoutPage.vue';

import TabsPage from '@/views/TabsPage.vue';
import MemoriesPage from '@/views/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: 'memories',
        component: MemoriesPage
      },
      {
        path: 'memories/:id',
        component: () => import('@/views/MemoryDetailsPage.vue')
      },
      {
        path: 'memories/add',
        component: () => import('@/views/AddMemoryPage.vue')
      },
      {
        path: 'logout',
        component: LogoutPage
      }
    ],
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && isAuthenticated) {
    next('/tabs/memories');
  } else {
    next(); 
  }
});

export default router;
