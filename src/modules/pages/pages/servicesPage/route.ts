import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/pages/services',
  name: 'ServicesPage',
  component: () => import(/* webpackChunkName: "ServicesPage" */ '@/modules/pages/pages/servicesPage/ServicesPage.vue'),
  meta: {
    navName: 'Услуги',
    navPart: 'Pages',
  },
};

export default route;