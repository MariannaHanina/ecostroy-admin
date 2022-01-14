<template>
  <v-form>
    <v-row>
      <v-col cols="4">
        <v-text-field
          v-model="slogan.mainText" 
          label="Основной текст"
          required
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="slogan.subText"
          label="Описание"
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="slogan.buttonText"
          label="Текст кнопки"
        />
      </v-col>
    </v-row>
    <v-btn
      color="success"
      @click="saveSlogan"
    >
      Сохранить
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, onMounted, ref } from 'vue'
import { useSlogan } from './composables/useSlogan';
import { TSloganType } from '../pageSlogan/types'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<TSloganType>,
      required: true,
    }
  },
  setup(props) {
    const { type } = toRefs(props);
    const { fetchSlogan, slogan: initialSlogan, setSlogan } = useSlogan(type.value);
    const slogan = ref(initialSlogan);

    const saveSlogan = () => {
      setSlogan(slogan.value);
    }

    onMounted(async () => {
      await fetchSlogan();
    });

    return {
      slogan,
      saveSlogan,
    }
  },
})
</script>
