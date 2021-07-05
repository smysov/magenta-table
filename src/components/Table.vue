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
              v-for="user of filteredUsers"
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

import TableHeader from '@/components/TableHeader.vue';
import TableRow from '@/components/TableBody.vue';

export default {
  name: 'MainTable',
  components: {
    TableHeader,
    TableRow,
  },
  props: {
    filteredUsers: {
      type: Array,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
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
    // min-height: 100%;
    max-height: 89vh;
    overflow: auto;
    width: 668px;
    margin: 0 auto;
  }
</style>
