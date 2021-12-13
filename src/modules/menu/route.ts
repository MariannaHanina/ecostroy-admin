import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/menu',
  name: 'Menu',
  component: () => import(/* webpackChunkName: "ContactsPage" */ '@/modules/menu/MenuPage.vue'),
  meta: {
    navName: 'Меню',
    navPart: 'SiteInfo',
  },
};

export default route;