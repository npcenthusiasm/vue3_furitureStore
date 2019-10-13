<template>
  <div class="productlist">
    <div class="container-fluid">
      <div class="jumbotron jumbotron-fluid d-flex banner-img">
        <div class="container" >
          <h1 class="text-white shadow d-inline-block">即使風格變化，一樣井井有條</h1>
          <p class="lead"></p>
        </div>
      </div>
    </div>
    <div class="container-fluid mb-4">
      <div class="d-flex">
        <div class="">
          <div class="bg-white ml-0">
            <nav aria-label="breadcrumb" style="">
              <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                <li class="breadcrumb-item"><router-link to="/productList">商品列表</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{currentCategory}}</li>
              </ol>
            </nav>
          </div>

        </div>
        <div class="ml-auto sort-list">
          <div class="dropdown">
            <div class="dropbtn">
            <button>{{sortText}}</button>
            <i class="fas fa-angle-down"></i>
            </div>
            <div class="dropdown-content">
              <a href="#" @click.prevent="sortProduct('default')">商品排序</a>
              <a href="#" @click.prevent="sortProduct('lowToHigh')">價格 > 由低到高</a>
              <a href="#" @click.prevent="sortProduct('highToLow')">價格 > 由高到低</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-3 mb-4">
         <ul class="mainmenu">
          <li><a href="#" @click.prevent="getLgCategory('所有商品')" class="main-link"
          :class="{'active': currentCategory === '所有商品'}">
            所有商品</a>
          <li :class="{'active': openStatus === '各式桌椅'}">
            <a href="#" @click.prevent="openStatus = '各式桌椅'" class="main-link">
            <i class="fas fa-caret-right"></i>各式桌椅</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('餐桌')"
              :class="{'active': currentCategory === '餐桌'}">餐桌</a></li>
              <li><a href="#" @click.prevent="getCategory('書桌')"
              :class="{'active': currentCategory === '書桌'}">書桌</a></li>
              <li><a href="#" @click.prevent="getCategory('辦公椅')"
              :class="{'active': currentCategory === '辦公椅'}">辦公椅</a></li>
              <li><a href="#" @click.prevent="getCategory('餐椅')"
              :class="{'active': currentCategory === '餐椅'}">餐椅</a></li>
              <li><a href="#" @click.prevent="getCategory('摺疊椅')"
              :class="{'active': currentCategory === '摺疊椅'}">摺疊椅</a></li>
              <li><a href="#" @click.prevent="getCategory('兒童椅')"
              :class="{'active': currentCategory === '兒童椅'}">兒童椅</a></li>
            </ul>
          </li>
          <li :class="{'active': openStatus === '沙發扶手椅'}">
            <a href="#" @click.prevent="openStatus = '沙發扶手椅'" class="main-link">
             <i class="fas fa-caret-right"></i>沙發扶手椅</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('布沙發')"
              :class="{'active': currentCategory === '布沙發'}">布沙發</a></li>
              <li><a href="#" @click.prevent="getCategory('沙發床')"
              :class="{'active': currentCategory === '沙發床'}">沙發床</a></li>
              <li><a href="#" @click.prevent="getCategory('組合沙發')"
              :class="{'active': currentCategory === '組合沙發'}">組合沙發</a></li>
              <li><a href="#" @click.prevent="getCategory('扶手椅')"
              :class="{'active': currentCategory === '扶手椅'}">扶手椅</a></li>
            </ul>
          </li>
          <li :class="{'active': openStatus === '床墊寢具'}">
            <a href="#" @click.prevent="openStatus = '床墊寢具'"
              class="main-link">
             <i class="fas fa-caret-right"></i>床墊寢具</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('單人床')"
              :class="{'active': currentCategory === '單人床'}">單人床</a></li>
              <li><a href="#" @click.prevent="getCategory('雙人床')"
              :class="{'active': currentCategory === '雙人床'}">雙人床</a></li>
              <li><a href="#" @click.prevent="getCategory('枕頭')"
              :class="{'active': currentCategory === '枕頭'}">枕頭</a></li>
              <li><a href="#" @click.prevent="getCategory('棉被')"
              :class="{'active': currentCategory === '棉被'}">棉被</a></li>
              <li><a href="#" @click.prevent="getCategory('嬰兒床')"
              :class="{'active': currentCategory === '嬰兒床'}">嬰兒床</a></li>
            </ul>
          </li>
          <li :class="{'active': openStatus === '照明燈具'}">
            <a href="#" @click.prevent="openStatus = '照明燈具'"
               class="main-link">
             <i class="fas fa-caret-right"></i>照明燈具</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('LED燈具')"
              :class="{'active': currentCategory === 'LED燈具'}">LED燈具</a></li>
              <li><a href="#" @click.prevent="getCategory('工作燈')"
              :class="{'active': currentCategory === '工作燈'}">工作燈</a></li>
              <li><a href="#" @click.prevent="getCategory('落地燈')"
              :class="{'active': currentCategory === '落地燈'}">落地燈</a></li>
              <li><a href="#" @click.prevent="getCategory('桌燈')"
              :class="{'active': currentCategory === '桌燈'}">桌燈</a></li>
            </ul>
          </li>
        </ul>
        </div>
        <div class="col-md-9">
          <div class="row">
            <!-- 2 -->
            <div class="col-md-6 col-lg-4 mb-3" v-for="item in filterPageProduct" :key="item.id">
              <div class="card box-shadow h-100"
              @click.stop="goDetail(item)"
              >
                <div class="card-bg-cover"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}
                    <span v-if="item.category === '燈具'" class="text-danger h5 flicker">NEW</span>
                  </h5>
                  <h5 class="badge badge-warning">{{item.category}}</h5>
                  <p class="card-text">{{item.description}}</p>
                </div>
                <div class="card-footer d-flex align-items-center border-top-0 bg-white">
                  <div class="mr-auto">
                    <div class="font-weight-bold h5"
                    v-if="!item.origin_price">{{item.price | currency}}</div>
                    <del class="font-weight-bold"
                    v-if="item.origin_price">{{item.origin_price | currency}}</del>
                    <div class="text-success font-weight-bold h5"
                    v-if="item.origin_price">{{item.price | currency}}
                    </div>
                  </div>
                  <div>
                    <a href="#" class="btn btn-outline-primary rounded-circle"
                    @click.stop.prevent="addToCart(item.id)"
                    :class="{'disabled': singleLoading}">
                      <i class="fa fa-shopping-bag"
                      v-if="!singleLoading  || productId !== item.id"></i>
                      <i class="fas fa-spinner fa-spin"
                      v-if="singleLoading && productId === item.id"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
          <pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      // currentCategory: '全部商品',
      openStatus: '',
      selected: '',
      sortText: '商品排序',
    };
  },
  methods: {
    ...mapActions('productListModules', ['getProducts']),
    getCategory(selected) {
      const vm = this;
      vm.$store.dispatch('productListModules/getCategory', selected);
    },
    getLgCategory(selected) {
      const vm = this;
      vm.$store.dispatch('productListModules/getLgCategory', selected);
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch('cartsModules/addToCart', { id, qty });
    },
    goDetail(product) {
      this.$store.dispatch('productListModules/getLgCategory', product.content);
      // console.log(product.content);
      this.$router.push(`/productList/${product.id}`);
    },
    sortProduct(sortType) {
      const vm = this;
      // console.log(sortType);
      if (sortType === 'highToLow') {
        vm.sortText = '價格 > 由高到低';
      } else if (sortType === 'lowToHigh') {
        vm.sortText = '價格 > 由低到高';
      } else {
        vm.sortText = '商品排序';
      }
      vm.$store.dispatch('productListModules/SortProduct', sortType);
    },
  },
  computed: {
    ...mapGetters('productListModules', ['filterPageProduct', 'currentCategory']),
    ...mapGetters('cartsModules', ['productId', 'singleLoading']),
  },
  created() {
    // 從 detail_swiper 傳遞 productId過來 ，因無法在透過 /productDetail/$(id) 切換頁面
    // 所以先導回這裡，在傳送過去
    if (this.$route.query.productId) {
      // eslint-disable-next-line
      const productId = this.$route.query.productId;
      this.$router.push(`/productList/${productId}`);
    }
    this.getProducts();
  },
};
</script>
