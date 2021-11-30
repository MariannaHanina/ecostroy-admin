import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import App from './App.vue';

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import './assets/tailwind.css';

import router from './router';


const vuetify = createVuetify();

createApp(App).use(router)
  .use(vuetify)
  .mount('#app');
