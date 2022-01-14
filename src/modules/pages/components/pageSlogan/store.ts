import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { TRootState } from '@/store/types';
import { TSloganState, TSloganMutations, TSloganActions, TSloganType, TSloganGetters } from './types';
import { fetchSlogan, updateSlogan } from './api';

export const state: TSloganState = {
  slogans: new Map(),
}

export const mutations: MutationTree<TSloganState> & TSloganMutations = {
  SET_SLOGAN ({ slogans }, payload) {
    slogans.set(payload.type, payload);
  },
};

export const actions: ActionTree<TSloganState, TRootState> & TSloganActions = {
  async fetchSlogan ({ commit }, type) {
    const slogan = await fetchSlogan(type);
    commit('SET_SLOGAN', slogan);
  },
  async updateSlogan ({ commit }, slogan) {
    const responseSlogan = await updateSlogan(slogan);
    commit('SET_SLOGAN', responseSlogan);
  }
};

export const getters: GetterTree<TSloganState, TRootState> & TSloganGetters = {
  sloganByType({ slogans }) {
    return (type: TSloganType) => {
      return slogans.get(type);
    }
  }
}

const sloganModule: Module<TSloganState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default sloganModule;