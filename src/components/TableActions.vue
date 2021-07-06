<template>
  <section class="actions">
    <div class="container">
      <div class="actions__inner">
        <search
          @input="inputSearch"
          @resetValue="resetValue"
        />
        <search-by-period @input="inputSerchByPeriod" />
      </div>
    </div>
  </section>
</template>

<script>
import Search from '@/components/ui/Search.vue';
import SearchByPeriod from '@/components/ui/SearchByPeriod.vue';

export default {
  name: 'TableActions',
  components: {
    Search,
    SearchByPeriod,
  },
  methods: {
    inputSearch(value) {
      this.$emit('performSearchUsers', value.toLowerCase().trim());
    },
    inputSerchByPeriod(from, to) {
      this.$emit('inputSerchByPeriod', from, to);
    },
    resetValue() {
      this.$emit('resetValue');
    },
  },
};
</script>

<style lang="scss">
  .actions {
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
