import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/pages',
  name: 'Pages',
  component: () => import(/* webpackChunkName: "ContactsPage" */ '@/modules/pages/PagesPage.vue'),
  meta: {
    navName: 'Страницы сайта',
    navPart: 'SiteInfo',
  },
};

export default route;