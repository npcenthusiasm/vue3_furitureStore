<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row header-wrap">
        <div class="col-4 pr-5 left-content">
          <img class="img-fluid" src="../../assets/images/home-header-2.jpg" >

          <div class="header">
            <h2 class="header-title">為即將到來的冷冽季節做好準備～</h2>
            <p class="header-text">充滿個人風格和正能量的新色和材質即將成為新潮流!
            </p>
            <router-link to="/productList" class="btn btn-warning rounded-0 d-block w-50">
            Go~</router-link>
          </div>
        </div>
        <div class="col-8 pl-5 pt-5 right-content">
          <img class="img-fluid" src="../../assets/images/home-header-1.jpg">
        </div>
      </div>
    </div>
    <div class="container-fluid py-4 bg-white">
      <h3 class="wow fadeInLeft titleText" data-wow-delay="0.5s">商品類別</h3>
      <div class="row py-2 wrap">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 mb-4 wow zoomIn" data-wow-delay="0.5s">
              <a href="#" @click.prevent="goPrductList('各式桌椅')"
              class="img-jump bg-cover home-img-1">
                <div class="discription">
                  <i class="fas fa-table fa-3x"></i>
                  table
                </div>
              </a>
            </div>

            <div class="col-md-6 mb-4 wow zoomIn" data-wow-delay="0.5s">
              <a href="#" @click.prevent="goPrductList('各式桌椅')"
              class="img-jump bg-cover home-img-2">
                <div class="discription">
                  <i class="fas fa-chair fa-3x"></i>
                  chair
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-4 wow zoomIn" data-wow-delay="0.75s">
              <a href="#" @click.prevent="goPrductList('照明燈具')"
              class="img-jump bg-cover home-img-3">
                <div class="discription">
                  <i class="fas fa-lightbulb fa-3x"></i>
                    light
                </div>
              </a>
            </div>
            <div class="col-md-6 mb-4 wow zoomIn" data-wow-delay="0.75s">
              <a href="#" @click.prevent="goPrductList('床墊寢具')"
              class="img-jump bg-cover home-img-4">
                <div class="discription">
                  <i class="fas fa-couch fa-3x"></i>
                  bed
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <a href="#" @click.prevent="goPrductList('沙發扶手椅')"
          class="img-jump bg-cover home-img-5 wow zoomIn"
          data-wow-delay=".5s" data-wow-duration="1s">
            <div class="discription">
              <i class="fas fa-couch fa-3x"></i>
              sofa
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container-fluid  py-4 hot">
      <h3 id="hot" class="wow fadeInLeft titleText" data-wow-delay="0.5s">熱門商品</h3>
      <Swiper />
    </div>
    <div class="container-fluid  py-4 news">
      <h3 id="new" class="wow fadeInLeft titleText" data-wow-offset="50">最新消息</h3>
      <div class="row">
        <div class="col-md-6 mb-3 d-flex align-items-center justify-content-center
        wow zoomIn" data-wow-offset="300">
          <div class="news-left p-5 wow fadeIn" data-wow-offset="300">
            <h4>限時優惠券，輸入優惠代碼可享更多優惠，最高可50%。</h4>
            <p>(限時優惠中)</p>
            <router-link to="/latestNews" class="btn btn-warning rounded-0">
            查看更多</router-link>
          </div>
        </div>
        <div class="col-md-6 news-right p-5">
          <div class="row">
            <div class="col-6 ">
              <img class="img-fluid" src="../../assets/images/vase.jpg">
            </div>
            <div class="col-6 wow fadeInRight" data-wow-offset="300">
              <h3>新品上市<span class="h5 text-danger flicker">NEW</span></h3>
              <p>
               不論是一束花，或是單枝玫瑰，就算單純擺放也像藝術品，讓你盡情布置自己空間，展現創意和風格，連角落都美麗。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from '@/components/Swiper.vue';

export default {
  components: {
    Swiper,
  },
  methods: {
    goPrductList(category) {
      this.$store.dispatch('productListModules/getCategory', { category, filterCondition: 'content' });
      this.$router.push('/productList');
    },
  },
};
</script>
