<template>
  <v-list>
    <v-item-group
      v-for="({ name, path, subitems }, i) in items"
      :key="i"
    >
      <v-list-item-title>
        <router-link :to="path">
          {{ name }}
        </router-link>
      </v-list-item-title>
      <v-item-group v-if="subitems">
        <template
          v-for="(subitem, i) in subitems"
          :key="i"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link :to="subitem.path">
                {{ subitem.name }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-item-group
            v-if="subitem.subitems"
            class="pl-3"
          >
            <v-list-item
              v-for="(subitem2, i) in subitem.subitems"
              :key="i"
            >
              <v-list-item-title>
                <router-link :to="subitem2.path">
                  {{ subitem2.name }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-item-group>
        </template>
      </v-item-group>
    </v-item-group>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getRoutesForNav } from '@/composables/routes';

export default defineComponent({
  name: 'AppMenu',
  setup() {
    const items = getRoutesForNav();

    return {
      items,
    };
  },
});
</script>
