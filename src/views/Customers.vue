<template>
  <div class="wrapper__content">
    <router-link
      class="navigation"
      to='/'
    >Пользователи</router-link>
    <table-actions
      @searchUsersByName="searchUsersByName"
      @performSearchByPeriod="performSearchByPeriod"
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
import { API_URL_BIG } from '@/config/api';

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
    ...mapGetters(['fields', 'users', 'searchQuery']),
  },
  mounted() {
    this.$store.dispatch('getUsers', API_URL_BIG);
  },
  methods: {
    searchUsersByName() {
      this.$store.dispatch('searchUsers', API_URL_BIG);
    },
    performSearchByPeriod() {
      this.$store.dispatch('setPeriod', API_URL_BIG);
    },
  },
};
</script>
