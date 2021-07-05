<template>
  <div class="wrapper__content">
    <main-table />
  </div>
</template>

<script>
import MainTable from '@/components/Table.vue';

export default {
  name: 'Home',
  components: {
    MainTable,
  },
};
</script>
