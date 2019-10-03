import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      // name: 'Layout',
      component: () => import('./views/Layout'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('./views/client/Home.vue'),
        },
        {
          path: '/productList',
          name: 'ProductList',
          component: () => import('./views/client/ProductList.vue'),
        },
        {
          path: '/productList/:productId',
          name: 'ProductDetail',
          component: () => import('./views/client/ProductDetail.vue'),
        },
        {
          path: '/orderCheck',
          name: 'OrderCheck',
          component: () => import('./views/client/OrderCheck.vue'),
        },
        {
          path: '/orderCreate',
          name: 'OrderCreate',
          component: () => import('./views/client/OrderCreate.vue'),
        },
        {
          path: '/orderCompelete/:orderId',
          name: 'OrderCompelete',
          component: () => import('./views/client/OrderCompelete.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/admin/Login.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('@/components/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/admin/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: () => import('./views/admin/Coupons.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
