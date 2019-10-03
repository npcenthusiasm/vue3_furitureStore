<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar />
    <AlertMessage/>
    <ScrollTop/>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navbar from './Navbar.vue';
import Footer from '@/components/Footer.vue';
import AlertMessage from '@/components/AlertMessage.vue';
import ScrollTop from '@/components/ScrollTop.vue';

export default {
  components: {
    Navbar,
    Footer,
    AlertMessage,
    ScrollTop,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
