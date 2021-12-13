<template>
  <section>
    <heading-level-1>Меню сайта</heading-level-1>
    <div>
      <v-form>
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
        <v-btn color="success">
          Сохранить
        </v-btn>
      </v-form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'MenuPage',
  setup() {
    const store = useStore();
    const menu = ref([]);
    const fetchMenu = () => store.dispatch('menu/fetchMenu');

    onMounted(async () => {
      await fetchMenu();
      menu.value = store.state.menu.menu;
    });
    
    return {
      menu,
    };
  },
})
</script>
