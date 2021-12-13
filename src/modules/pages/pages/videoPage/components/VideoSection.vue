<template>
  <article>
    <heading-level-2>
      {{title}}
    </heading-level-2>
    <text-media-block />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoSection',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
})
</script>
