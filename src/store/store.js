import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

import productListModules from './productList';
import cartsModules from './carts';
import alertMsgModules from './alertMessage';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // 嚴謹模式
  state: {
    isLoading: false,
  },
  actions: {
    // payload 載荷
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    pagination(state) {
      return state.pagination;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  modules: {
    productListModules,
    cartsModules,
    alertMsgModules,
  },
});
