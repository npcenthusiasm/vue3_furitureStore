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
      <div class="bg-white ml-0">
        <nav aria-label="breadcrumb" style="">
          <ol class="breadcrumb bg-white">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item"><router-link to="/productList">商品列表</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{currentCategory}}</li>
          </ol>
        </nav>
      </div>
      <div class="row mb-4">
        <div class="col-md-3 mb-4">
          <!--
            <ul class="list-group sticky-top" style="top:10px">
            <li class="list-group-item list-group-item-action"
            :class="{'active': item.category === currentCategory}"
             v-for="item in categories" :key="item.category"
             @click.prevent="getCategory(item.category)">
              <i :class="item.icon"></i> {{item.category}}
            </li>
          </ul>
          -->
          <!-- 
          { category: '全部商品',detail: ['辦公椅', '餐椅', '摺疊椅', '兒童椅']},

           -->
          
         <ul class="mainmenu">
          <!-- <li class="main-link"  @click.prevent="openList"><a>Home</a></li> -->
          <li><a href="#" @click.prevent="getCategory('全部商品')" class="main-link">
            全部商品</a>
          <li><a href="#" @click.prevent="openList" class="main-link">
            <i class="fas fa-caret-right"></i>各式桌椅</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('餐桌')">餐桌</a></li>
              <li><a href="#" @click.prevent="getCategory('書桌')">書桌</a></li>
              <li><a href="#" @click.prevent="getCategory('辦公椅')">辦公椅</a></li>
              <li><a href="#" @click.prevent="getCategory('餐椅')">餐椅</a></li>
              <li><a href="#" @click.prevent="getCategory('摺疊椅')">摺疊椅</a></li>
              <li><a href="#" @click.prevent="getCategory('兒童椅')">兒童椅</a></li>
            </ul>
          </li>
          <li><a href="#" @click.prevent="openList" class="main-link">
             <i class="fas fa-caret-right"></i>沙發扶手椅</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('布沙發')">布沙發</a></li>
              <li><a href="#" @click.prevent="getCategory('沙發床')">沙發床</a></li>
              <li><a href="#" @click.prevent="getCategory('組合沙發')">組合沙發</a></li>
              <li><a href="#" @click.prevent="getCategory('扶手椅')">扶手椅</a></li>
            </ul>
          </li>
          <li><a href="#" @click.prevent="openList" class="main-link">
             <i class="fas fa-caret-right"></i>床墊寢具</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('單人床')">單人床</a></li>
              <li><a href="#" @click.prevent="getCategory('雙人床')">雙人床</a></li>
              <li><a href="#" @click.prevent="getCategory('枕頭')">枕頭</a></li>
              <li><a href="#" @click.prevent="getCategory('棉被')">棉被</a></li>
              <li><a href="#" @click.prevent="getCategory('嬰兒床')">嬰兒床</a></li>
            </ul>
          </li>
          <li><a href="#" @click.prevent="openList" class="main-link">
             <i class="fas fa-caret-right"></i>照明燈具</a>
            <ul class="submenu">
              <li><a href="#" @click.prevent="getCategory('LED燈具')">LED燈具</a></li>
              <li><a href="#" @click.prevent="getCategory('工作燈')">工作燈</a></li>
              <li><a href="#" @click.prevent="getCategory('落地燈')">落地燈</a></li>
              <li><a href="#" @click.prevent="getCategory('桌燈')">桌燈</a></li>
            </ul>
          </li>          
        </ul>
        
        </div>
        <div class="col-md-9">
          <div class="row">
            <!-- 2 -->
            <div class="col-md-6 col-lg-4 mb-3" v-for="item in filterPageProduct" :key="item.id">
              <div class="card box-shadow h-100"
              @click.stop="$router.push(`/productList/${item.id}`)"
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
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      currentCategory: '全部商品',
      categories: [
        { category: '全部商品',detail: ['辦公椅', '餐椅', '摺疊椅', '兒童椅']},
        // { category: '全部商品', icon: 'fas fa-align-justify' },
        // { category: '各式桌椅', icon: 'fas fa-chair' },
        // { category: '寢具', icon: 'fas fa-bed' },
        // { category: '沙發', icon: 'fas fa-couch' },
        // { category: '燈具', icon: 'fas fa-lightbulb' },
      ],
    };
  },
  methods: {
   ...mapActions('productListModules', ['getProducts']),
    getCategory(selected) {
      const vm = this;
      vm.$store.dispatch('productListModules/getCategory', selected);
      vm.currentCategory = selected;
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch('cartsModules/addToCart', { id, qty });
    },
    openList(e) {
      $(e.target.parentElement).toggleClass('active');
    }
  },
  computed: {
    ...mapGetters('productListModules', ['filterPageProduct']),
    ...mapGetters('cartsModules', ['productId', 'singleLoading']),
  },
  created() {
    if (this.$route.query.category) {
      this.currentCategory = this.$route.query.category;
      this.$router.push('/productList');
    }
    this.getProducts(this.currentCategory);
  },
};
</script>
<style>
/*
$main : #f5b937;
.banner-img {
  background-image: url('../../assets/images/banner.jpg')
}
.list-group .active {
  background-color: $main;
}
.list-group-item {
  cursor: pointer;
  border: 0;
}
.card {
  cursor: pointer;
}
.card-bg-cover {
  background-size: cover;
  background-position: center center;
  height: 200px;
}
.card-bg-cover:hover {
  background-size: cover;
  background-position: center center;
  height: 200px;
  opacity: 0.8;
}
.jumbotron-bg-cover {
  background-size: cover;
  background-position: center center;
  height: 400px;
}
.box-shadow {
  box-shadow: 0 3px 5px  rgba(0, 0, 0, .16);
}
.box-shadow:hover {
  box-shadow: 0 3px 5px  rgba(0, 0, 0, 0.7);
}
@keyframes flicker {
  0%{opacity: 1;}
  50%{opacity: 0;}
  100%{opacity: 1;}
}
.flicker {
  animation: flicker 2s linear infinite;
}

@include media-breakpoint-down(md) {
  .jumbotron h1 {
    font-size: 10px;
  }
} */

</style>
