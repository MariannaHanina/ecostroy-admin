<template>
  <v-app>
    <v-app-bar
      app
      color="grey-darken-4"
      dark
      class="text-white"
    >
      <app-header />
    </v-app-bar>
    <v-main>
      <v-navigation-drawer app>
        navigation drawer
      </v-navigation-drawer>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      footer
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue'


export default defineComponent({
  name: 'LayoutDefault',
  components: {
    AppHeader,
  },
});
</script>