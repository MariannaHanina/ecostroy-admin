<template>
  <section>
    <heading-level-1>Страница Услуги</heading-level-1>
    <page-slogan type="services" />
    <text-media-block />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/pageSlogan/PageSlogan.vue';

export default defineComponent({
  name: 'ServicesPage',
  components: {
    PageSlogan,
  },
})
</script>
