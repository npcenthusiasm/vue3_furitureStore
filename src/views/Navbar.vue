<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <router-link to="/">Flover</router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link @click.native="closeBurger" to="/productList" class="nav-link"
          :class="{'active': $route.name === 'ProductList' }"
          >所有商品
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeBurger" :to="{ name:'ProductList',query: { category: '各式桌椅' }}"
          class="nav-link"
          :class="{'active': $route.name === 'LatestNews' }"
          >各式桌椅
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeBurger" :to="{ name:'ProductList',query: { category: '沙發' }}"
          class="nav-link"
          :class="{'active': $route.name === 'LatestNews' }"
          >沙發手扶椅
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeBurger" to="/latestNews" class="nav-link"
          :class="{'active': $route.name === 'LatestNews' }"
          >床墊寢具
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeBurger" to="/latestNews" class="nav-link"
          :class="{'active': $route.name === 'LatestNews' }"
          >照明燈具
          </router-link>
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
    },
    closeBurger() {
      // 點連結切換頁面時，如果menu是開啟的狀態，將其取消
      const vm = this;
       if (this.buggerOpen) {
        $('.nav-links').removeClass('active');  
        $('.burger').removeClass('active');
        $('body').removeClass('hidden');
        vm.buggerOpen = false;
      }
    },
  },
  computed: {
    ...mapGetters('cartsModules', ['carts', 'total', 'cartsCount']),
  },
  created() {
    this.getCart();
  },
};
</script>
