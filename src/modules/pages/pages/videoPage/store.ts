import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { TRootState } from '@/store/types';
import { TVideoType, TVideoState, TVideoMutations, TVideoActions, TVideoGetters } from './types';
import { fetchVideo, updateOneVideo } from './api';

export const state: TVideoState = {
  video: [],
}

export const mutations: MutationTree<TVideoState> & TVideoMutations = {
  SET_VIDEO (store, payload) {
    store.video = payload;
  },
  SET_ONE_VIDEO (store, payload) {
    const index = store.video.findIndex(v => v._id == payload._id);
    store.video[index] = payload;
  }
};

export const actions: ActionTree<TVideoState, TRootState> & TVideoActions = {
  async fetchVideo ({ commit }) {
    const video = await fetchVideo();
    commit('SET_VIDEO', video);
  },
  async updateOneVideo ({ commit }, video) {
    const responseVideo = await updateOneVideo(video);
    commit('SET_ONE_VIDEO', responseVideo);
  }
};

export const getters: GetterTree<TVideoState, TRootState> & TVideoGetters = {
  videoByType({ video }) {
    return (type: TVideoType ) => video.filter(v => v.type === type);
  }
}

const videoModule: Module<TVideoState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default videoModule;