<template>
  <section>
    <heading-level-1>Страница Галерея</heading-level-1>
    <page-slogan />
    <galleries-description />
    <text-media-block />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/PageSlogan.vue';
import GalleriesDescription from './components/GalleriesDescription.vue';

export default defineComponent({
  name: 'GalleriesPage',
  components: {
    PageSlogan,
    GalleriesDescription,
  },
})
</script>
