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
      <base-button
        view="base-button_red"
        textButton="Сбросить"
        @click.native="resetInputs"
      />
    </div>
  </section>
</template>

<script>
import Search from '@/components/ui/Search.vue';
import SearchByPeriod from '@/components/ui/SearchByPeriod.vue';

import { mapGetters } from 'vuex';
import BaseButton from './ui/BaseButton.vue';

export default {
  name: 'TableActions',
  components: {
    Search,
    SearchByPeriod,
    BaseButton,
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
    resetInputs() {
      if (!this.searchQuery && !this.fromQuery && !this.toQuery) return;
      this.$store.dispatch('setSearch', '');
      this.$store.dispatch('setFromQuery', '');
      this.$store.dispatch('setToQuery', '');
      this.$emit('resetInputs');
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
