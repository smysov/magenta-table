<template>
  <div class="wrapper__content">
    <table-actions
      @performSearchUsers="performSearchUsers"
      @inputSerchByPeriod="inputSerchByPeriod"
    />
    <main-table
      v-if="users.length"
      v-bind="{ fields, users }"
    />
    <search-message v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import API_URL_SMALL from '@/config/api';

import MainTable from '@/components/Table.vue';
import TableActions from '@/components/TableActions.vue';
import SearchMessage from '@/components/ui/SearchMessage.vue';

export default {
  name: 'Home',
  components: {
    MainTable,
    TableActions,
    SearchMessage,
  },
  computed: {
    ...mapGetters(['fields', 'users']),
  },
  mounted() {
    this.$store.dispatch('getUsers', API_URL_SMALL);
  },
  methods: {
    performSearchUsers(searchQuery) {
      this.$store.dispatch('setSearch', searchQuery);
      this.$store.dispatch('searchUsers', API_URL_SMALL);
    },
    inputSerchByPeriod(fromQuery, toQuery) {
      this.$store.dispatch('setFromQuery', fromQuery);
      this.$store.dispatch('setToQuery', toQuery);
      this.$store.dispatch('setPeriod', API_URL_SMALL);
    },
  },
};
</script>
