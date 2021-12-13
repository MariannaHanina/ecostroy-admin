<template>
  <section>
    <heading-level-1>Контактные данные</heading-level-1>
    <div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit="saveContacts"
      >
        <v-text-field
          v-model="contacts.address"
          label="Адрес"
          required
        />
        <v-text-field
          v-model="contacts.phones"
          label="Телефоны"
          hint="Разделите номера запятой (,)."
          required 
        />
        <v-text-field
          v-model="contacts.email"
          label="Email"
          required 
        />
        <v-btn
          color="success"
          @click="validateContacts"
        >
          Сохранить
        </v-btn>
      </v-form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { TContacts } from './types';

export default defineComponent({
  name: 'ContactsPage',
  setup() {
    const store = useStore();
    const contacts = ref({} as TContacts);
    const fetchContacts = () => store.dispatch('contacts/fetchContacts');
    const updateContacts = (contacts: TContacts) => store.dispatch('contacts/updateContacts', contacts);

    const form = ref();
    const valid = ref(false);
    const saveContacts = () => {
      const contactsValue = contacts.value as TContacts;
      updateContacts(contactsValue);
    }

    const validateContacts = (e: Event) => {
      form.value.submit(e);
    }

    onMounted(async () => {
      await fetchContacts();
      contacts.value = store.state.contacts.contacts;
    })

    return {
      form,
      valid,
      contacts,
      validateContacts,
      saveContacts,
    };
  },
})
</script>
