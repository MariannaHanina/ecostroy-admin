<template>
  <section>
    <heading-level-1>Страница Услуги</heading-level-1>
    <page-slogan />
    <text-media-block />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/PageSlogan.vue';

export default defineComponent({
  name: 'ServicesPage',
  components: {
    PageSlogan,
  },
})
</script>
