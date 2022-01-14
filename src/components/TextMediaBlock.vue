<template>
  <v-form>
    <v-text-field
      label="Заголовок"
      required 
    />
    <v-text-field 
      label="Ссылка"
      required
    />  
    <v-textarea
      label="Краткое описание"
      required 
    />
    Editor
    <v-text-field
      label="Текст кнопки"
    />
    <v-text-field
      label="Ссылка на видео"
    />
    <v-text-field
      label="Загрузить изображение"
    />
    <v-btn color="success">
      Сохранить
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextMediaBlock',
  setup() {
    
  },
})
</script>
