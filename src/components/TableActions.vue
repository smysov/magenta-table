<template>
  <section class="actions">
    <div class="container">
      <div class="actions__inner">
        <search
          @searchInput="performSearch"
          @searchUsersByName="searchUsersByName"
          :searchQuery="searchQuery"
        />
        <search-by-period
          @fromInput="formInput"
          @toInput="toInput"
          @performSearchByPeriod="performSearchByPeriod"
          v-bind="{fromQuery, toQuery}"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Search from '@/components/ui/Search.vue';
import SearchByPeriod from '@/components/ui/SearchByPeriod.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'TableActions',
  components: {
    Search,
    SearchByPeriod,
  },
  computed: {
    ...mapGetters(['searchQuery', 'fromQuery', 'toQuery']),
  },
  methods: {
    performSearch(value) {
      this.$store.dispatch('setSearch', value);
    },
    searchUsersByName() {
      this.$emit('searchUsersByName');
    },
    formInput(value) {
      this.$store.dispatch('setFromQuery', value);
    },
    toInput(value) {
      this.$store.dispatch('setToQuery', value);
    },
    performSearchByPeriod() {
      if (!this.fromQuery || !this.toQuery) return;
      this.$emit('performSearchByPeriod');
    },
  },
};
</script>

<style lang="scss">
  .actions {
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>
