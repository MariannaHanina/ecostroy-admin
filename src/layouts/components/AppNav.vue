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
        <v-list-item
          v-for="(subitem, i) in subitems"
          :key="i"
        >
          <v-list-item-title>
            <router-link :to="subitem.path">
              {{ subitem.name }}
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-item-group>
    </v-item-group>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';

export default defineComponent({
  name: 'AppMenu',
  setup() {
    const routes = useRouter().getRoutes();
    console.log('routes', routes);

    // const filterRoutes = (route: RouteRecordRaw) => route.meta?.navPart;
    const filterFirstLevel = (route: RouteRecordRaw) => route.meta?.navPart == true;
    const filterByNavPart = (name: symbol) => routes.filter(
      (route: RouteRecordRaw) => route.meta?.navPart === name
    );
    const formatRoute = ({ path, meta }: RouteRecordRaw) => ({ 
      path, 
      name: meta?.navName
    });

    const filteredFirstLevel = routes.filter(filterFirstLevel);
    const items = filteredFirstLevel.map(({name, path, meta}: RouteRecordRaw) => ({
      path,
      name: meta?.navName,
      subitems: name ? filterByNavPart(name).map(formatRoute) : [],
    }));

    return {
      items,
    };
  },
})
</script>
