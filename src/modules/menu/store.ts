import { Module, MutationTree, ActionTree } from 'vuex';
import { TRootState } from '@/store/types';
import { TMenuItem, TMenuState, TMenuMutations, TMenuActions } from './types';
import { fetchMenu, updateMenu } from './api';

export const state: TMenuState = {
  menu: [] as TMenuItem[],
}

export const mutations: MutationTree<TMenuState> & TMenuMutations = {
  SET_MENU (state, payload) {
    state.menu = payload;
  },
};

export const actions: ActionTree<TMenuState, TRootState> & TMenuActions = {
  async fetchMenu ({ commit }) {
    const menu = await fetchMenu();
    commit('SET_MENU', menu);
  },
  async updateMenu ({ commit }, menu) {
    const responseMenu = await updateMenu(menu);
    commit('SET_MENU', responseMenu);
  }
};

const menuModule: Module<TMenuState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default menuModule;