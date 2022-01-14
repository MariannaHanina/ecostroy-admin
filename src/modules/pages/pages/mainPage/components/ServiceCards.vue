<template>
  <v-form>
    <heading-level-2>Услуги</heading-level-2>
    <div class="grid grid-cols-3 gap-10 mb-10">
      <v-card
        v-for="service in services"
        :key="service._id"
      >
        <v-img src="" />
        <v-card-text>
          <v-text-field 
            v-model="service.title"
            label="Название сервиса"
            required
          />
          <v-file
            label="Иконка сервиса"
            required
          />
          <v-textarea 
            v-model="service.intro"
            label="Краткое описание"
            required
          />
        </v-card-text>
      </v-card>
    </div>
    <v-btn
      color="success"
      @click="updateServices"
    >
      Сохранить
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { TService } from '../../servicesPage/types';

export default defineComponent({
  name: 'ServiceCards',
  setup() {
    const store = useStore();
    const fetchServices = () => store.dispatch('services/fetchServices');
    const updateServices = () => store.dispatch('services/updateServices', services.value);
    const services: ComputedRef<TService[]> = computed(() => store.getters['services/services']);

    onMounted(() => {
      fetchServices();
    });

    return {
      services,
      updateServices
    };
  },
})
</script>
