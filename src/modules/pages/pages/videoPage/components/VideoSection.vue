<template>
  <article>
    <heading-level-2>
      {{title}}
    </heading-level-2>
    <div class="grid grid-cols-3 gap-10 mb-10">
      <v-card
         v-for="v in video"
        :key="v._id"
      >
        <v-card-text>
          <text-media-block :info="video" />
        </v-card-text>
       </v-card>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
  }
})
</script>
