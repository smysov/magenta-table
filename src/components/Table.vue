<template>
  <section class="users">
    <div class="container">
      <div class="table-scroll">
        <table>
          <thead>
            <table-header :fields="fields" />
          </thead>
          <tbody>
            <table-row
              v-for="user of users"
              :key="`${user.name}-${user.surname}`"
              v-bind="{ user, fields }"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import API_URL_SMALL from '@/config/api';

import TableHeader from '@/components/TableHeader.vue';
import TableRow from '@/components/TableBody.vue';

export default {
  name: 'MainTable',
  components: {
    TableHeader,
    TableRow,
  },
  computed: {
    ...mapGetters(['fields', 'users']),
  },
  mounted() {
    this.$store.dispatch('getUsers', API_URL_SMALL);
  },
};
</script>

<style lang="scss">
  table {
    font-weight: 400;
    text-align: center;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .table-scroll {
    height: 89vh;
    overflow: scroll;
    width: 868px;
    margin: 0 auto;
  }
</style>
