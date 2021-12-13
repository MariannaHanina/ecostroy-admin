<template>
  <section>
    <heading-level-1>Страница Проекты</heading-level-1>
    <page-slogan />
    Проекты
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/PageSlogan.vue';

export default defineComponent({
  name: 'ProjectsPage',
  components: {
    PageSlogan,
  },
})
</script>
