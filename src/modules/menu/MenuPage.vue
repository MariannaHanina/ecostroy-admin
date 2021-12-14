<template>
  <section>
    <heading-level-1>Меню сайта</heading-level-1>
    <div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit="saveMenu"
      >
        <v-list vertical>
          <template
            v-for="item in menu"
            :key="item.id"
          >
            <v-list-item>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="item.path"
                    label="Путь"
                    required
                    disabled
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="item.title"
                    label="Название"
                    required 
                  />
                </v-col>
              </v-row>
            </v-list-item>
            <v-item-group
              class="w-full pl-5"
              v-if="item.items && item.items.length"
            >
              <v-list-item
                v-for="subitem in item.items"
                :key="subitem.id"
              >
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="subitem.path"
                      label="Путь"
                      required
                      disabled
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="subitem.title"
                      label="Название"
                      required 
                    />
                  </v-col>
                </v-row>
              </v-list-item>
            </v-item-group>
          </template>
        </v-list>
        <v-btn
          color="success"
          @click="validateMenu"
        >
          Сохранить
        </v-btn>
      </v-form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { TMenuItem } from './types';

export default defineComponent({
  name: 'MenuPage',
  setup() {
    const store = useStore();
    const menu = ref([] as TMenuItem[]);
    const fetchMenu = () => store.dispatch('menu/fetchMenu');
    const updateMenu = (menu: TMenuItem[]) => store.dispatch('menu/updateMenu', menu);

    const form = ref();
    const valid = ref(false);
    const saveMenu = () => {
      const menuValue = menu.value as TMenuItem[];
      updateMenu(menuValue);
    }

    const validateMenu = (e: Event) => {
      form.value.submit(e);
    }

    onMounted(async () => {
      await fetchMenu();
      menu.value = store.state.menu.menu;
    });
    
    return {
      form,
      menu,
      valid,
      saveMenu,
      validateMenu,
    };
  },
})
</script>
