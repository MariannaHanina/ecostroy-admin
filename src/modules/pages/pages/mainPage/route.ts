import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/pages/main',
  name: 'MainPage',
  component: () => import(/* webpackChunkName: "MainPage" */ '@/modules/pages/pages/mainPage/MainPage.vue'),
  meta: {
    navName: 'Главная',
    navPart: 'Pages',
  },
};

export default route;