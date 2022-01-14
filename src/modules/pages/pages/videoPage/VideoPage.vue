<template>
  <section>
    <heading-level-1>Страница Видео</heading-level-1>
    <page-slogan type="video" />

    <video-section
      title="Последние видео"
      class="mt-10"
      :video="getVideoByType('newVideo')" 
    />
    <video-section
      title="Видео о технологии строительства"
      class="mt-10"
      :video="getVideoByType('aboutTech')" 
    />
    <video-section
      title="Обзоры готовых домов"
      class="mt-10"
      :video="getVideoByType('review')" 
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import PageSlogan from '@/modules/pages/components/pageSlogan/PageSlogan.vue';
import VideoSection from './components/VideoSection.vue';
import { TVideoType } from './types';

export default defineComponent({
  name: 'VideoPage',
  components: {
    PageSlogan,
    VideoSection,
  },
  setup () {
    const store = useStore();
    const fetchVideo = () => store.dispatch('video/fetchVideo');
    const getVideoByType = (type: TVideoType) => store.getters['video/videoByType'](type);

    onMounted(async () => {
      await fetchVideo();
    });

    return {
      getVideoByType,
    };
  }
})
</script>
