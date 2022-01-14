<template>
  <article>
    <heading-level-2>
      {{title}}
    </heading-level-2>
    <div class="grid grid-cols-3 gap-10 mb-10">
      <text-media-block
        v-for="v in video"
        :key="v._id"
        :init-info="v"
        media="video"
        @save="saveVideo"
      /> 
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';
import { TVideo } from '../types';

export default defineComponent({
  name: 'VideoSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    video: {
      type: Array as PropType<TVideo[]>,
      required: true
    }
  },
  setup() {
    const store = useStore();
    const saveVideo = (video: TVideo) => store.dispatch('video/updateOneVideo', video);

    return {
      saveVideo
    }
  }
})
</script>
