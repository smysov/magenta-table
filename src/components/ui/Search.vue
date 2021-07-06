<template>
  <form
    class="search"
    @submit.prevent="performSearch"
  >
    <base-input
      @resetValue="resetValue"
      idFor="search"
      v-model="searchQuery"
      placeholder="Найти пользователей"
      className="base-input_search"
    />
    <button
      class="search__submit"
      aria-label="найти пользователей"
    >
    </button>
  </form>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput.vue';

export default {
  name: 'Search',
  components: {
    BaseInput,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      this.$emit('input', this.searchQuery);
    },
    resetValue() {
      this.searchQuery = '';
      this.$emit('resetValue');
    },
  },
};
</script>

<style lang="scss">
  .search {
    display: flex;
    align-items: flex-end;
    &__submit {
      position: relative;
      background: none;
      border: 2px solid #000;
      transition: all 0.3s ease;
      outline: none;
      cursor: pointer;
      width: 45px;
      height: 32px;
      &:hover {
        opacity: 0.6;
      }
      &:focus {
        box-shadow: 0 0 10px 2px #71d66d;
        background: #eeeeee;
      }
      &::before {
        position: absolute;
        content: '';
        top: 19px;
        left: 19px;
        width: 13px;
        height: 2px;
        background: #000;
        transform: rotate(50deg);
      }
      &::after {
        position: absolute;
        content: '';
        top: 3px;
        left: 9px;
        width: 15px;
        height: 15px;
        border: 2px solid #000;
        border-radius: 100%;
      }
    }
  }
</style>
