<template>
  <v-img
    src="@/assets/logo.png"
    alt="Экострой"
    max-width="10rem"
  />
  <v-app-bar-title>
    Admin
  </v-app-bar-title>
  <v-spacer />
  <user-menu />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserMenu from './UserMenu.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    UserMenu,
  },
})
</script>
