<template>
  <section>
    <heading-level-1>Страница Видео</heading-level-1>
    <page-slogan />
    <video-section
      title="Последние видео"
      class="mt-10"
    />
    <video-section
      title="Видео о технологии строительства"
      class="mt-10"
    />
    <video-section
      title="Обзоры готовых домов"
      class="mt-10"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/PageSlogan.vue';
import VideoSection from './components/VideoSection.vue';

export default defineComponent({
  name: 'VideoPage',
  components: {
    PageSlogan,
    VideoSection,
  },
})
</script>
