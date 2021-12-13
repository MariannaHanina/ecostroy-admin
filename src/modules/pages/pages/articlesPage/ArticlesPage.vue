<template>
  <section>
    <heading-level-1>Страница Статьи</heading-level-1>
    <page-slogan />
    <text-media-block />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/PageSlogan.vue';

export default defineComponent({
  name: 'ArticlesPage',
  components: {
    PageSlogan,
  },
})
</script>
