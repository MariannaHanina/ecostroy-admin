import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/pages/video',
  name: 'VideoPage',
  component: () => import(/* webpackChunkName: "VideoPage" */ '@/modules/pages/pages/videoPage/VideoPage.vue'),
  meta: {
    navName: 'Видео',
    navPart: 'Pages',
  },
};

export default route;