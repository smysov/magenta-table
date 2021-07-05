<template>
  <section class="actions">
    <div class="container">
      <div class="actions__inner">
        <search
          @input="inputSearch"
          @resetValue="resetValue"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Search from '@/components/ui/Search.vue';

export default {
  name: 'TableActions',
  components: {
    Search,
  },
  methods: {
    inputSearch(value) {
      this.$emit('performSearchUsers', value.toLowerCase().trim());
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
