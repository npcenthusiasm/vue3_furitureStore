<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in home_hot_products" :key="item.id" class="swiper-slide mb-5">
      <div @click="$router.push(`/productList/${item.id}`)">
        <div :style="{backgroundImage: `url(${item.imageUrl})`}" class="bg-cover"></div>
        <div class="py-2 pl-1 detail">
          <div class="h5 font-weight-bold">{{item.title}}</div>
          <div class="font-weight-bold">{{item.price | currency}}</div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 20,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 4000,
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods: {
    ...mapActions('productListModules', ['getProducts']),
    // getProducts() { // page = 1
    //   this.$store.dispatch('productListModules/getProducts');
    // },
  },
  computed: {
    ...mapGetters('productListModules', ['home_hot_products']),
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped>
  .bg-cover {
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 150px;
  }
  .swiper-slide{
    cursor: pointer;
    border: 1px solid transparent;
      &:hover {
        border: 1px solid #f1be4f;
        .detail {
          color: #f5b937;
          // color: #9f5149;
      }
    }
  }
</style>
