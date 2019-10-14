import axios from 'axios';

export default {
  // namespaced: true -> actions, mutations, getters 屬於區域變數
  namespaced: true,
  strict: true, // 嚴謹模式
  state: {
    products: [], // 所有
    filterProduct: [], // 過濾類別
    currentCategory: '所有商品',
    filterCondition: 'all',
    sortType: 'default',
    sortText: '',
    pageProduct: [], // 每一頁要 render 幾筆 product
    pagination: {}, // 在這決定 pagePrduct
  },
  actions: {
    // 只要取得 products 都必須 過濾category 和 sort 再交給pagination 拉出9筆資料出去
    getProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTS', response.data.products);
          context.commit('FILTER_PRODUCT', { category: context.state.currentCategory, filterCondition: context.state.filterCondition });
          context.dispatch('SortProduct', context.state.sortType);
          context.dispatch('getPagination');
          context.commit('LOADING', false, { root: true });
        }
      });
    },
    // 過濾category 之後再 sort 再交給pagination 拉出9筆資料出去
    getCategory(context, { category, filterCondition }) {
      context.commit('CATEGORY', { category, filterCondition });
      context.commit('FILTER_PRODUCT', { category, filterCondition });
      context.dispatch('SortProduct', context.state.sortType);
      context.dispatch('getPagination');
    },
    // sort之後 再交給pagination 拉出9筆資料出去
    SortProduct(context, sortType) {
      context.commit('SORTPRODUCT', sortType);
      context.dispatch('getPagination');
    },
    getPagination(context, page = 1) {
      context.commit('PAINATION', page);
    },
  },
  mutations: {
    // 只取得一開始的 所有products
    PRODUCTS(state, products) {
      state.products = products;
    },
    CATEGORY(state, payload) {
      state.currentCategory = payload.category;
      state.filterCondition = payload.filterCondition;
    },
    LGCATEGORY(state, payload) {
      state.lgCategory = payload;
    },
    // test
    FILTER_PRODUCT(state, payload) {
      // eslint-disable-next-line
      const filterCondition = payload.filterCondition;
      // eslint-disable-next-line
      const category = payload.category;
      if (filterCondition === 'content') {
        state.filterProduct = state.products.filter(item => item.content === category);
      } else if (filterCondition === 'category') {
        state.filterProduct = state.products.filter(item => item.category === category);
      } else if (filterCondition === 'all' || state.currentCategory === '所有商品') {
        // 所有商品
        state.filterProduct = state.products;
      }
    },
    SORTPRODUCT(state, sortType) {
      state.sortType = sortType;
      if (sortType === 'highToLow') {
        state.sortText = '價格 > 由高到低';
        state.filterProduct = state.filterProduct.sort((a, b) => b.price - a.price);
      } else if (sortType === 'lowToHigh') {
        state.filterProduct = state.filterProduct.sort((a, b) => a.price - b.price);
        state.sortText = '價格 > 由低到高';
      } else {
        state.sortText = '商品排序';
        state.filterProduct = state.filterProduct.sort((a, b) => a.title.length - b.title.length);
      }
    },
    // 判斷顯示頁數 及 顯示內容
    // 第一頁 0~9    page*10 -10   page*10-1 取9筆
    // 第二頁 10 ~ 19
    PAINATION(state, page) {
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
    currentCategory(state) {
      return state.currentCategory;
    },
    sortText(state) {
      return state.sortText;
    },
    home_hot_products(state) {
      // home 的 swiper
      return state.products.slice(0, 11);
    },
    Related_Products(state) {
      // ProductDetail 的 swiper
      return state.products.filter(item => item.content === state.currentCategory);
    },
    pagination(state) {
      return state.pagination;
    },
    filterPageProduct(state) {
      return state.pageProduct;
    },
  },
};
