<template>
  <div>
    <Navbar />
    <AlertMessage></AlertMessage>
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar_admin.vue';
import Sidebar from './Sidebar.vue';
import AlertMessage from './AlertMessage.vue';

export default {
  components: {
    Sidebar,
    Navbar,
    AlertMessage,
  },
};
</script>
