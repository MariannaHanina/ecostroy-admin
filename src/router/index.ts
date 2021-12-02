import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  NavigationGuard
} from 'vue-router';
import HomeView from '../pages/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'SiteInfo',
    component: HomeView,
    meta: {
      navName: 'Информация для сайта',
      navPart: true,
    },
  },
  {
    path: '/calcInfo',
    name: 'CalcInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/AboutView.vue'),
    meta: {
      navName: 'Информация для рассчетов',
      navPart: true,
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

export function addRoute (route: RouteRecordRaw): void {
  if (route.name && !router.hasRoute(route.name)) {
    router.addRoute(route);
  }
}

export function addBeforeEachHook (hook: NavigationGuard): void {
  router.beforeEach(hook);
}
