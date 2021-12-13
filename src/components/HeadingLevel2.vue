<template>
  <h2 class="text-4xl mb-8">
    <slot />
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeadingLevel2',
})
</script>
