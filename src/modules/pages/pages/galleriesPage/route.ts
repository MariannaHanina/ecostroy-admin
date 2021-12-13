import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/pages/galleries',
  name: 'GalleriesPage',
  component: () => import(/* webpackChunkName: "GalleriesPage" */ '@/modules/pages/pages/galleriesPage/GalleriesPage.vue'),
  meta: {
    navName: 'Галерея',
    navPart: 'Pages',
  },
};

export default route;