<template>
  <div>
     <nav class="d-flex justify-content-center" >
      <ul class="pagination border-danger rounded">
        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
          @click.prevent="getPage(pagination.current_page - 1)">PREV</a>
        </li>
        <li class="page-item" v-for="item in pagination.total_pages" :key="item"
        :class="{'active':pagination.current_page === item}">
          <a class="page-link" href="#" @click.prevent="getPage(item)">{{item}}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pagination.has_next}">
          <a class="page-link" href="#"
          @click.prevent="getPage(pagination.current_page + 1)">NEXT</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    getPage(page = 1) {
      this.$store.dispatch('productListModules/getPagination', page);
    },
  },
  computed: {
    ...mapGetters('productListModules', ['pagination']),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/_custom.scss';
  .pagination {
    .page-item {
       .page-link {
          letter-spacing: 5px;
        }
      }
    }
</style>
