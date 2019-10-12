import axios from 'axios';

export default {
  // namespaced: true -> actions, mutations, getters 屬於區域變數
  namespaced: true,
  state: {
    products: [], // 所有
    currentCategory: '全部商品',
    filterProduct: [], // 過濾類別
    pageProduct: [], // 根據過濾類別後 決定每一頁要顯示多少的 product
    pagination: {}, // 在這決定 pagePrduct
  },
  actions: {
    getProducts(context) {
      // 流程
      // 取得 products 過濾類別 傳給 pagination
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTS', response.data.products);
          context.dispatch('getPagination');
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    getCategory(context, currentCategory) {
      // console.log(currentCategory);
      context.commit('CATEGORY', currentCategory);
      context.commit('FILTER_PRODUCT', currentCategory);
      context.dispatch('getPagination');
    },
    getPagination(context, page = 1) {
      context.commit('PAINATION', page);
    },
  },
  // 第一頁 0~9    page*10 -10   page*10-1 取9筆
  // 第二頁 10 ~ 19
  mutations: {
    // 只取得一開始的 所有products
    PRODUCTS(state, products) {
      state.products = products;
    },
    CATEGORY(state, payload) {
      state.currentCategory = payload;
    },
    // 只負責 過濾products 類別
    FILTER_PRODUCT(state, currentCategory) {
      state.filterProduct = state.products.filter(item => item.category === currentCategory);
    },
    // 判斷顯示頁數 及 顯示內容
    PAINATION(state, page) {
      if (state.currentCategory === '全部商品') {
        state.filterProduct = state.products;
      }
      const pagination = {};
      pagination.total_pages = Math.floor(state.filterProduct.length / 10) + 1;
      pagination.current_page = page;
      pagination.has_pre = pagination.current_page - 1 >= 1;
      pagination.has_next = pagination.current_page + 1 <= pagination.total_pages;
      //
      state.pagination = pagination;
      state.pageProduct = state.filterProduct.slice((page * 10) - 10, (page * 10) - 1);
    },
  },
  getters: {
    filterPageProduct(state) {
      return state.pageProduct;
    },
    pagination(state) {
      return state.pagination;
    },
  },
};
