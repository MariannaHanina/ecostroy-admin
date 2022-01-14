<template>
  <v-form>
    <v-card>
      <v-image
        v-if="'image' in info"
        :src="info.image" 
      />
      <video-frame 
        v-if="'video' in info"
        :src="info.video"
        class="w-full"
      />
      <v-card-text>
        <v-text-field
          v-model="info.title"
          label="Заголовок"
          required 
        />
        <v-checkbox
          v-if="info.link"
          v-model="isLink"
          label="При клике на заголовок переход по ссылке"
        />
        <v-text-field
          v-if="isLink"
          v-model="info.link"
          label="Ссылка для перехода"
          required
        />  
        <v-textarea
          v-if="'intro' in info"
          v-model="info.intro"
          label="Краткое описание"
          required 
        />
        <v-textarea
          v-model="info.text"
          label="Полное описание"
          required 
        />
        <v-radio-group
          v-if="!media"
          v-model="mediaType"
        >
          <template v-slot:label>
            Тип медиа:
          </template>
          <v-radio 
            label="Изображение"
            value="image"
          />
          <v-radio 
            label="Видео"
            value="video"
          />
        </v-radio-group>
        <v-text-field
          v-model="info.video"
          label="Ссылка на видео"
          v-if="mediaType == 'video'"
        />
        <v-text-field
          v-model="info.image"
          label="Загрузить изображение"
          v-if="mediaType == 'image'"
        />
        <v-checkbox
          v-model="isButton"
          v-if="'button' in info"
          label="Есть ли кнопка?"
        />
        <v-text-field
          v-model="info.button.text"
          label="Текст кнопки"
          v-if="isButton"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="success"
          @click="saveInfo"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from 'vue';
import { TTextMedia } from '@/types';

export default defineComponent({
  name: 'TextMediaBlock',
  props: {
    initInfo: {
      type: Object as PropType<TTextMedia>,
      required: true
    },
    media: {
      type: String as PropType<'image' | 'video'>,
      default: 'image'
    }
  },
  emits: ['save'],
  setup(props, { emit }) {
    const { initInfo, media } = toRefs(props);
    const info  = ref(initInfo);
    const isLink = ref('link' in info.value);
    const isButton = ref('button' in info.value);
    const mediaType = media 
      ? ref(media) 
      : ref('image' in info.value ? 'image' : 'video');
    const saveInfo = () => emit('save', info.value);

    return {
      info,
      isLink,
      isButton,
      mediaType,
      saveInfo
    }
  },
})
</script>
