import { Module, MutationTree, ActionTree } from 'vuex';
import { TRootState } from '@/store/types';
import { TContacts, TContactsState, TContactsMutations, TContactsActions } from './types';
import { fetchContacts, updateContacts } from './api';

export const state: TContactsState = {
  contacts: {} as TContacts,
}

export const mutations: MutationTree<TContactsState> & TContactsMutations = {
  SET_CONTACTS (state, payload) {
    state.contacts = payload;
  },
};

export const actions: ActionTree<TContactsState, TRootState> & TContactsActions = {
  async fetchContacts ({ commit }) {
    const contacts = await fetchContacts();
    commit('SET_CONTACTS', contacts);
  },
  async updateContacts ({ commit }, contacts) {
    const responseContacts = await updateContacts(contacts);
    commit('SET_CONTACTS', responseContacts);
  }
};

const contactsModule: Module<TContactsState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default contactsModule;