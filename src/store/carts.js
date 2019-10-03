import axios from 'axios';

export default {
  // namespaced: true -> actions, mutations, getters 屬於區域變數
  namespaced: true,
  state: {
    carts: [],
    cartsCount: 0,
    total: 0,
    final_total: 0,
    isSingleLoading: false,
    productId: '',
  },
  actions: {
    // payload 載荷
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('CARTSCOUNT', response.data.data.carts.length);
          context.commit('CARTS', response.data.data.carts);
          context.commit('TOTAL', response.data.data.total);
          context.commit('FINAL_TOTAL', response.data.data.final_total);
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    removeCart(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(api).then((response) => {
        if (response.data.success) {
          context.dispatch('alertMsgModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          context.dispatch('getCart');
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    addToCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('SINGLELOADING', true);
      context.commit('PRODUCTID', id);
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          // this.$bus.$emit('message:push', response.data.message, 'success');
          context.dispatch('alertMsgModules/updateMessage', { message: response.data.message, status: 'success' }, { root: true });
          context.commit('PRODUCTID', '');
          context.commit('SINGLELOADING', false);
          context.dispatch('getCart');
        }
      });
    },
  },
  mutations: {
    CARTS(state, payload) {
      state.carts = payload;
    },
    TOTAL(state, payload) {
      state.total = payload;
    },
    FINAL_TOTAL(state, payload) {
      state.final_total = payload;
    },
    CARTSCOUNT(state, payload) {
      state.cartsCount = payload;
    },
    SINGLELOADING(state, status) {
      state.isSingleLoading = status;
    },
    PRODUCTID(state, payload) {
      state.productId = payload;
    },
  },
  getters: {
    carts: state => state.carts,
    total: state => state.total,
    final_total: state => state.final_total,
    cartsCount: state => state.cartsCount,
    singleLoading: state => state.isSingleLoading,
    productId: state => state.productId,
  },
};
