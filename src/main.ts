import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import './assets/tailwind.css';

import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

import registerGlobalComponents from './registerGlobalComponents';
import '@/modules/index';


const vuetify = createVuetify();

const app = createApp(App);

app.use(router)
  .use(store)
  .use(vuetify)
  .use(VueAxios, axios)
  .mount('#app');

registerGlobalComponents(app);

