<template>
  <v-menu offset-y>
    <template v-slot:activator="{ props }">
      <v-btn 
        class="mr-3"
        v-bind="props"
        min-width="10rem"
      >
        User
      </v-btn>
    </template>
    <v-list 
      color="white"
      class="shadow"
      outlined
    >
      <v-list-item>
        <v-list-item-title>
          Role
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-btn>Logout</v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserMenu',
});
</script>
