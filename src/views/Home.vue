<template>
  <div class="wrapper__content">
    <table-actions @performSearchUsers="performSearchUsers" />
    <main-table
      v-if="filteredUsers.length"
      v-bind="{ fields, filteredUsers }"
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
    ...mapGetters(['fields', 'filteredUsers']),
  },
  mounted() {
    this.$store.dispatch('getUsers', API_URL_SMALL);
  },
  methods: {
    performSearchUsers(searchQuery) {
      this.$store.dispatch('setSearch', searchQuery);
    },
  },
};
</script>
