<template>
  <section>
    <heading-level-1>Страница Статьи</heading-level-1>
    <page-slogan type="articles" />
    <text-media-block />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/pageSlogan/PageSlogan.vue';

export default defineComponent({
  name: 'ArticlesPage',
  components: {
    PageSlogan,
  },
})
</script>
