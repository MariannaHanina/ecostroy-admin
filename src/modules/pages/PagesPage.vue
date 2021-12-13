<template>
  <section>
    <heading-level-1>Страницы сайта</heading-level-1>
    <div>
      <v-list>
        <v-list-item
          v-for="({ name, path }, i) in items"
          :key="i"
        >
          <v-list-item-title>
            <router-link :to="path">
              {{ name }}
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getPageRoutes } from '@/composables/routes';

export default defineComponent({
  name: 'PagesPage',
  setup() {
    const items = getPageRoutes();

    return {
      items,
    };
  },
})
</script>
