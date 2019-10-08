<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row header-wrap">
        <div class="col-4 pr-5 left-content">
          <img class="img-fluid" src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
          <div class="header">
            <h2 class="header-title">為即將到來的冷冽季節做好準備～</h2>
            <p class="header-text">充滿個人風格和正能量的新色和材質即將成為新潮流!
            </p>
            <router-link to="/productList" class="btn btn-warning rounded-0 d-block w-50">Go~</router-link>
          </div>
        </div>
        <div class="col-8 pl-5 pt-5 right-content">
          <img class="img-fluid" src="https://images.unsplash.com/photo-1547110287-71448271b1de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt="">
        </div>
      </div>
    </div>
    <div class="container-fluid py-4 bg-white">
      <h3 class="wow fadeInLeft titleText" data-wow-delay="0.5s">商品類別</h3>
      <div class="row py-2 wrap">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6 mb-4">
              <router-link to="/productList"
              class="img-jump bg-cover home-img-1">
                <div class="discription">
                  <i class="fas fa-table"></i>
                  <ul>
                    <li class="">table</li>
                    <li>桌</li>
                  </ul>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 mb-4 ">
              <router-link to="/productList" 
              class="img-jump bg-cover home-img-2">
                <div class="discription">
                  <i class="fas fa-chair"></i>
                  <ul>
                    <li class="">chair</li>
                    <li>椅</li>
                  </ul>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 mb-4">
              <router-link to="/productList" class="img-jump bg-cover home-img-3">
                <div class="discription">
                  <i class="fas fa-lightbulb"></i>
                  <ul>
                    <li class="">light</li>
                    <li>燈</li>
                  </ul>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 mb-4">
              <router-link to="/productList" class="img-jump bg-cover home-img-4">
                <div class="discription">
                  <i class="fas fa-couch"></i>
                  <ul>
                    <li class="">床</li>
                    <li>bed</li>
                  </ul>
                </div>
              </router-link>
            </div>
          </div>  
        </div>
        <div class="col-md-6 mb-4">
          <router-link to="/productList" class="img-jump bg-cover home-img-5">
            <div class="discription">
              <i class="fas fa-couch"></i>
              <ul>
                <li class="">sofa</li>
                <li>沙發</li>
              </ul>
            </div>
          </router-link>
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
};
</script>

<style lang="scss">

// .home {
//   .header-wrap {
//     background-color: $custom-gray ;
//     .left-content {
//       position: relative;
//       .header {
//         position: absolute;
//         left: 80%;
//         top: 20%;
//         z-index: 1;
//         margin-right: -200px;
//         .header-title {
//           color:#272b36 ;
//           font-weight: 600;
//         }
//         .header-text {
//           color: #272b36;
//           font-weight: 600;
//         }
//       }
//     }
//   }
  
//   .home-img-1 {
//     background-image: url('../../assets/images/product-1.jpg');
//   }
//   .home-img-2 {
//     background-image: url('../../assets/images/product-2.jpg');
//   }
//   .home-img-3 {
//     background-image: url('../../assets/images/product-3.jpg');
//   }
//   .home-img-4 {
//     background-image: url('../../assets/images/product-4.jpg');
//   }
//   .home-img-5 {
//     background-image: url('../../assets/images/product-5.jpg');
//   }
//   .img-jump {
//     text-decoration: none;
//     transition: .33s all ease;
//     position: relative;
//     display: block;
//     text-align: center;
//     overflow: hidden;
//     cursor: pointer;
//     img {
//       display: inline-block;
//       width: 100%;
//       height: auto;
//     }
//     &:hover .discription {
//       opacity: 1;
//       transform: scale(1);
//       padding: 15px;
//     }
//     .discription {
//       opacity: 0;
//       transform: scale(.8);
//       position: absolute;
//       top: 0;
//       bottom: 0;
//       right: 0;
//       left: 0;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       padding: 25px;
//       background-color: rgba(245, 185, 55, 0.5);
//       color: $custom-gray;
//       transition: 250ms ease-in-out;
//       &:hover::before {
//         opacity: 1;
//       }
//       ul {
//         list-style: none;
//         margin: 0;
//         padding: 0;
//         li {
//           margin: 1.2rem 0;
//         }
//       }
//     }
//   }

//   .hot {
//       background-color: $custom-gray;
//   }
//   .titleText {
//       display: inline-block;
//       border-bottom: 3px solid $custom-yellow;
//     }

//   .news {
//     background-color: $custom-white;
//     .news-left {
//       background-color: $custom-gray;
//       box-shadow: 3px 3px 3px $custom-yellow;
//     }
//     .news-right {
//       background-color: $custom-gray;
//     }
//   }
//   .bg-cover {
//     background-position: center center ;
//     background-size: cover;
//     background-repeat: no-repeat;
//     min-height: 200px;
//     height: 100%;
//     width:100% ;
//   }
//   @keyframes flicker {
//     0%{opacity: 1;}
//     50%{opacity: 0;}
//     100%{opacity: 1;}
//   }
//   .flicker {
//     animation: flicker 2s linear infinite;
//   }
//   @include media-breakpoint-down(md) {
//     .jumbotron h1 {
//       font-size: 40px;
//     }
//   }
//   @include media-breakpoint-down(sm) {
//    .header-wrap {
//     .left-content {
//       .header {
//         .header-title {
//           font-size: 40px;
//         }
//         .header-text {
//         }
//       }
//     }
//   }
// }
</style>