import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { TRootState } from '@/store/types';
import { TServicesState, TServicesMutations, TServicesActions, TServicesGetters } from './types';
import { fetchServices, updateServices } from './api';

export const state: TServicesState = {
  services: new Map(),
}

export const mutations: MutationTree<TServicesState> & TServicesMutations = {
  SET_SERVICES (store, payload) {
    console.log('payload', payload);
    store.services = new Map(payload.map(service => [service.type, service]))
  },
};

export const actions: ActionTree<TServicesState, TRootState> & TServicesActions = {
  async fetchServices ({ commit }) {
    const services = await fetchServices();
    commit('SET_SERVICES', services);
  },
  async updateServices ({ commit }, services) {
    const responseServices = await updateServices(services);
    commit('SET_SERVICES', responseServices);
  }
};

export const getters: GetterTree<TServicesState, TRootState> & TServicesGetters = {
  services({ services }) {
    return Array.from(services, ([name, value]) => value);
  }
}

const servicesModule: Module<TServicesState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default servicesModule;