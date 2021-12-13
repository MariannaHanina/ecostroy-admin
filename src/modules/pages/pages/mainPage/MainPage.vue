<template>
  <section>
    <heading-level-1>Главная страница</heading-level-1>
    <div>
      <page-slogan />
      <service-cards class="mb-10" />
      <about-company />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSlogan from '@/modules/pages/components/PageSlogan.vue';
import ServiceCards from './components/ServiceCards.vue';
import AboutCompany from './components/AboutCompany.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    PageSlogan,
    ServiceCards,
    AboutCompany,
  },
})
</script>
