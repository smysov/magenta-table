<template>
  <div class="wrapper__content">
    <router-link
      class="navigation"
      to='/'
    >Пользователи</router-link>
    <table-actions
      @searchUsersByName="searchUsersByName"
      @performSearchByPeriod="performSearchByPeriod"
      @resetInputs="resetInputs"
    />
    <preloader v-show="isLoading" />
    <main-table
      v-show="users.length"
      v-bind="{ fields, users }"
    />
    <search-message v-show="!users.length && !isLoading" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { API_URL_BIG } from '@/config/api';

import MainTable from '@/components/Table.vue';
import TableActions from '@/components/TableActions.vue';
import SearchMessage from '@/components/ui/SearchMessage.vue';
import Preloader from '@/components/ui/Preloader.vue';

export default {
  name: 'Home',
  components: {
    MainTable,
    TableActions,
    SearchMessage,
    Preloader,
  },
  computed: {
    ...mapGetters(['fields', 'users', 'searchQuery', 'isLoading']),
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
    resetInputs() {
      this.$store.dispatch('getUsers', API_URL_BIG);
    },
  },
};
</script>
