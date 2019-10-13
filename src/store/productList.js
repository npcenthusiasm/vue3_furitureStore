import axios from 'axios';

export default {
  // namespaced: true -> actions, mutations, getters 屬於區域變數
  namespaced: true,
  strict: true, // 嚴謹模式
  state: {
    products: [], // 所有
    filterProduct: [], // 過濾類別
    currentCategory: '所有商品',
    lgCategory: '所有商品',
    sortType: 'default',
    pageProduct: [], // 根據過濾類別後 決定每一頁要顯示多少的 product
    pagination: {}, // 在這決定 pagePrduct
  },
  actions: {
    // 取得所有資料 過濾類別 排序 pagination拉出9筆資料
    // 1.初始化  取得所有資料 -> pagination拉出9筆資料
    // 2.根據 1.初始資料 過濾類別 -> pagination拉出9筆資料
    // 3.根據 2.過濾資料 做排序 -> pagination拉出9筆資料
    // 狀況 點排序 切換類別後 排序失效
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
    // test
    // getCategory(context, { category, filter_condition }) {
    //   // console.log(currentCategory, 'cat');
    //   context.commit('CATEGORY', category);
    //   context.commit('FILTER_PRODUCT', { category, filter_condition });
    //   context.dispatch('SortProduct', context.state.sortType);
    //   context.dispatch('getPagination');
    // },
    // get product.category
    getCategory(context, currentCategory) {
      context.commit('CATEGORY', currentCategory);
      context.commit('FILTER_PRODUCT', currentCategory);
      context.dispatch('SortProduct', context.state.sortType);
      context.dispatch('getPagination');
    },
    // get product.content
    getLgCategory(context, lgCategory) {
      context.commit('LGCATEGORY', lgCategory);
      context.commit('FILTER_LGCATEGORY_PRODUCT', lgCategory);
      context.dispatch('SortProduct', context.state.sortType);
      context.dispatch('getPagination');
    },
    SortProduct(context, sortType) {
      context.commit('SORTPRODUCT', sortType);
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
      state.filterProduct = products;
    },
    CATEGORY(state, payload) {
      state.currentCategory = payload;
      state.lgCategory = ''; // 小類別有選擇，則大類別清空
    },
    LGCATEGORY(state, payload) {
      state.lgCategory = payload;
      // state.currentCategory = payload;
    },
    // 只負責 過濾products 類別
    FILTER_PRODUCT(state, currentCategory) {
      state.filterProduct = state.products.filter(item => item.category === currentCategory);
      // state.filterProduct = state.products.sort((a, b) => b.price - a.price);
    },
    FILTER_LGCATEGORY_PRODUCT(state, lgCategory) {
      // if ( lgCategory === 'content') {
      //   state.filterProduct = state.products.filter(item => item.content === lgCategory);
      // }
      // else if ( lgCategory === 'category') {
      //   state.filterProduct = state.products.filter(item => item.category === currentCategory);
      // }
      // else {
      //   // 所有商品
      //   state.filterProduct = state.products;
      // }
      if (lgCategory === '所有商品') {
        state.filterProduct = state.products;
      } else {
        state.filterProduct = state.products.filter(item => item.content === lgCategory);
      }
    },
    SORTPRODUCT(state, sortType) {
      state.sortType = sortType;
      if (sortType === 'highToLow') {
        state.filterProduct = state.filterProduct.sort((a, b) => b.price - a.price);
      } else if (sortType === 'lowToHigh') {
        state.filterProduct = state.filterProduct.sort((a, b) => a.price - b.price);
      } else {
        // state.filterProduct = state.products.sort((a, b) => b.price - a.price);
      }
    },
    // 判斷顯示頁數 及 顯示內容
    PAINATION(state, page) {
      // if (state.lgCategory === '所有商品') {
      //   state.filterProduct = state.products;
      //   if (state.sortType !== '') {
      //     context.dispatch()
      //   }
      //   console.log('PAINATION 原本products 給 filterproducts');
      // }
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
    home_hot_products(state) {
      return state.products.slice(0, 11);
    },
    filterPageProduct(state) {
      return state.pageProduct;
    },
    Related_Products(state) {
      return state.products.filter(item => item.content === state.lgCategory);
    },
    pagination(state) {
      return state.pagination;
    },
    currentCategory(state) {
      return state.currentCategory;
    },
    lgCategory(state) {
      return state.lgCategory;
    },
  },
};
