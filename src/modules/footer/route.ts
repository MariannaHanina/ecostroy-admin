import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/footer',
  name: 'Footer',
  component: () => import(/* webpackChunkName: "Footer" */ '@/modules/footer/FooterPage.vue'),
  meta: {
    navName: 'Подвал',
    navPart: 'SiteInfo',
  },
};

export default route;