<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <router-link to="/">Flover</router-link>
      </div>
      <ul class="nav-links">
         <li>
          <a href="#" class="nav-link" @click.prevent="closeBurger('所有商品')"
          :class="{'active': lgCategory === '所有商品' }"
          >所有商品
          </a>
        </li>
        <li>
          <a href="#" class="nav-link" @click.prevent="closeBurger('各式桌椅')"
          :class="{'active': lgCategory === '各式桌椅' }"
          >各式桌椅
          </a>
        </li>
        <li>
          <a href="#" class="nav-link" @click.prevent="closeBurger('沙發扶手椅')"
          :class="{'active': lgCategory === '沙發扶手椅' }"
          >沙發扶手椅
          </a>
        </li>
        <li>
          <a href="#" class="nav-link" @click.prevent="closeBurger('床墊寢具')"
          :class="{'active': lgCategory === '床墊寢具' }"
          >床墊寢具
          </a>
        </li>
        <li>
          <a href="#" class="nav-link" @click.prevent="closeBurger('照明燈具')"
          :class="{'active': lgCategory === '照明燈具' }"
          >照明燈具
          </a>
        </li>
      </ul>
      <!--  -->
      <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <router-link to="/login"
              class="btn btn-outline-primary rounded-circle">
              <i class="fas fa-user-circle"></i>
              </router-link>
            </li>
            <li class="list-inline-item">
              <button class="btn btn-outline-primary rounded-circle btn-cart"
              data-toggle="dropdown">
                <i class="fa fa-shopping-bag"></i>
                <div class="badge badge-pill badge-danger">{{cartsCount}}</div>
              </button>
              <div class="dropdown-menu dropdown-menu-right" style="min-width: 300px;z-index:1021;">
                <div class="px-4 py-3">
                  <h6>已選購商品</h6>
                  <div class="cart-scroll">
                    <table class="table table-hover table-sm">
                      <tbody>
                        <tr v-for="item in carts" :key="item.id">
                          <td class="align-middle text-center">
                            <a href="#" class="text-muted"
                              @click.prevent="removeCart(item.id)">
                              <i class="fa fa-times"></i>
                            </a>
                          </td>
                          <td class="">
                            <div class="cart-img"
                            :style="{backgroundImage:`url(${item.product.imageUrl})`}"></div>
                          </td>
                          <td class="align-middle text-left" style="font-size:14px">
                            {{item.product.title}}</td>
                          <td class="align-middle text-right" style="font-size:14px">
                            {{item.qty}}/{{item.product.unit}}</td>
                          <td class="align-middle text-right" style="font-size:14px">
                            {{item.total | currency}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p v-if="cartsCount === 0">是空的</p>
                  </div>
                  <div v-if="cartsCount !== 0">
                    <hr>
                    <div class="d-flex mb-3">
                      <div class="mr-auto">總金額</div>
                      <div class="text-right">{{total | currency}}</div>
                    </div>
                    <router-link class="btn btn-outline-primary btn-block"
                    to="/orderCheck">結帳去</router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
      <!--  -->
      <div class="burger" @click="bugerToggle">
        <div class="line"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </nav>
  </div>
</template>
<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      buggerOpen: false,
    };
  },
  methods: {
    ...mapActions('cartsModules', ['getCart']),
    removeCart(id) {
      this.$store.dispatch('cartsModules/removeCart', id);
    },
    bugerToggle() {
      const vm = this;
      vm.buggerOpen = !vm.buggerOpen;
      $('.nav-links').toggleClass('active');
      $('.burger').toggleClass('active');
      $('body').toggleClass('hidden');
      // :to="{ name:'ProductList',params: { category: '各式桌椅' }}"
    },
    closeBurger(category) {
      // 點連結切換頁面時，如果menu是開啟的狀態，將其取消
      const vm = this;
      if (this.buggerOpen) {
        $('.nav-links').removeClass('active');
        $('.burger').removeClass('active');
        $('body').removeClass('hidden');
        vm.buggerOpen = false;
      }
      // 如果頁面不是在 productList 就導向 productList
      if (vm.$route.name !== 'ProductList') {
        this.$store.dispatch('productListModules/getLgCategory', category);
        vm.$router.push('/productList');
      } else {
        this.$store.dispatch('productListModules/getLgCategory', category);
      }
    },
  },
  computed: {
    ...mapGetters('cartsModules', ['carts', 'total', 'cartsCount']),
    ...mapGetters('productListModules', ['lgCategory']),
  },
  created() {
    this.getCart();
  },
};
</script>
