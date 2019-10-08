<template>
  <div class="footer">
    <footer class="py-2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-md-4 wow fadeIn" data-wow-offset="100">
            <ul class="list-group">
              <li class="list-group-item h5" id="about">ABOUT</li>
              <li class="list-group-item">
                <router-link to="/latestNews">最新公告</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/aboutUs">關於我們</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/marketInfo">門市資訊</router-link>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 wow fadeIn" data-wow-offset="100" data-wow-delay="1s">
            <ul class="list-group">
              <li class="list-group-item h5">CONTACT</li>
              <li class="list-group-item">
                <i class="fa fa-clock"></i> 24hr
              </li>
              <li class="list-group-item">
                  <i class="fa fa-envelope"></i> furshop@mail.com
              </li>
              <li class="list-group-item">
                  <i class="fa fa-phone-alt"></i> 02-12345678
              </li>
            </ul>
          </div>
          <div class="ml-auto col-md-4">
          <div class="form-group">
            <input class="form-control rounded-0" type="text" placeholder="Email">
            </div>
            <button href="#" class="btn btn-warning rounded-0 w-100">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="container-fluid copyright">
        <ul class="list-inline text-center">
          <li class="list-inline-item d-block mb-2">© Copright 2019 npcenthusiasm</li>
          <li class="list-inline-item">
            <i class="fab fa-facebook-square fa-2x"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-instagram fa-2x"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-twitter-square fa-2x"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-line fa-2x"></i>
          </li>
        </ul>
        <div class="text-center">資料、圖片來源皆來自網路</div>
        <div class="text-center">僅個人作品練習，無任何商業用途</div>
      </div>
    </footer>
  </div>
</template>
<script>
import { WOW } from 'wowjs';

export default {
  mounted() {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
    });
    wow.init();
  },
};
</script>
