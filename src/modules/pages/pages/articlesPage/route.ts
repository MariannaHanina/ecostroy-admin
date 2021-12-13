import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/pages/articles',
  name: 'ArticlesPage',
  component: () => import(/* webpackChunkName: "ArticlesPage" */ '@/modules/pages/pages/articlesPage/ArticlesPage.vue'),
  meta: {
    navName: 'Статьи',
    navPart: 'Pages',
  },
};

export default route;