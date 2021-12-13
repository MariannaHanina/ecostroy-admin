import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/pages/projects',
  name: 'ProjectsPage',
  component: () => import(/* webpackChunkName: "ProjectsPage" */ '@/modules/pages/pages/projectsPage/ProjectsPage.vue'),
  meta: {
    navName: 'Проекты',
    navPart: 'Pages',
  },
};

export default route;