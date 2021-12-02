import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/contacts',
  name: 'Contacts',
  component: () => import(/* webpackChunkName: "ContactsPage" */ '@/modules/contacts/ContactsPage.vue'),
  meta: {
    navName: 'Контакты',
    navPart: 'SiteInfo',
  },
};

export default route;