<template>
  <h1 class="text-6xl mb-10">
    <slot />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeadingLevel1',
})
</script>
