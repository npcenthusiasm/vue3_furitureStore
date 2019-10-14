
<template>
  <div>
    <div class="container-fluid">
      <div class="bg-white ml-0">
        <nav aria-label="breadcrumb" style="">
          <ol class="breadcrumb bg-white">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item"><router-link to="/productList">商品列表</router-link></li>
            <li class="breadcrumb-item">
              <router-link to="/productList">
                {{product.category}}
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
            <router-link to=""></router-link>
          </ol>
        </nav>
      </div>

      <div class="row">
        <div class="col-md-7 productImg order-1 order-md-0">
          <img class="img-fluid" :src="product.imageUrl" alt="">
        </div>
        <div class="col-md-5 order-0  order-md-1">
          <div class="" style="">
            <a href="#" class="badge badge-warning">{{product.category}}</a>
            <div class="my-4">
              <h1 class="h2">{{product.title}}</h1>
              <div class="d-flex">
                <span class="mr-3 font-weight-bold">{{product.price | currency}}</span>
                <del class="text-secondary font-weight-bold">
                  {{product.origin_price | currency}}</del>
              </div>
            </div>
            <hr>
            <div class="d-flex">
              <div class="btn-group border border-secondary mr-2" role="group">
                <button type="button" class="btn btn-white" @click="minusNum">-</button>
                <input type="text" class="btn btn-white num-text" v-model.number="num">
                <button type="button" class="btn btn-white" @click="plusNum">+</button>
              </div>
              <a href="#" class="btn btn-outline-secondary rounded-0 w-100"
              @click.prevent="addToCart(productId, num)"
              :class="{'disabled': singleLoading}">
              <span v-if="!singleLoading">加入購物袋</span>
              <i class="fas fa-spinner fa-spin" v-if="singleLoading"></i></a>
            </div>
            <div class="my-4">
              <h5>商品描述</h5>
              <p style="line-height:2">{{product.description}}</p>
            </div>
            <div class="my-4">
              <h5>商品資訊</h5>
              <ul class="pl-4">
                <li>外型小巧美觀，即使空間有限，也易於搭配其他家具</li>
                <li>金屬框架，堅固耐用</li>
                <li>有2種尺寸可供選擇，提供2-4人座位</li>
                <li>簡約設計，可搭配多種佈置風格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h5>觀看此商品的人也看了...</h5>
      <Swiper/>
    </div>
  </div>
</template>
<style>
.num-text {
  max-width: 80px;
}
</style>

<script>
import { mapGetters } from 'vuex';
import Swiper from '@/components/Detail_swiper.vue';

export default {
  components: {
    Swiper,
  },
  data() {
    return {
      product: {},
      productId: '',
      num: 1,
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
      vm.$store.dispatch('updateLoading', true);
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.product = response.data.product;
          vm.$store.dispatch('updateLoading', false);
          this.$store.dispatch('productListModules/getCategory', { category: response.data.product.content, filterCondition: 'content' });
        }
      });
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch('cartsModules/addToCart', { id, qty });
    },
    plusNum() {
      this.num += 1;
    },
    minusNum() {
      // eslint-disable-next-line no-unused-expressions
      this.num > 1 ? this.num -= 1 : this.num = 1;
    },
  },
  computed: {
    ...mapGetters('cartsModules', ['singleLoading']),
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct();
    // console.log(this.product.content, 'detail')
  },
};
</script>

<style lang="scss" scoped>
  .productImg img {
    margin-bottom: 30px;
  }
</style>
