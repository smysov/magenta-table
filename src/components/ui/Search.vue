<template>
  <form
    class="search"
    @submit.prevent="searchUsersByName"
  >
    <input
      @input="searchInput"
      :value="searchQuery"
      type="text"
      class="search__input"
      placeholder="Найти пользователей"
    >
    <button
      class="search__submit"
      aria-label="найти пользователей"
    >
    </button>
  </form>
</template>

<script>

export default {
  name: 'Search',
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
  },
  methods: {
    searchInput(e) {
      this.$emit('searchInput', e.target.value);
    },
    searchUsersByName() {
      this.$emit('searchUsersByName');
    },
  },
};
</script>

<style lang="scss">
  .search {
    display: flex;
    align-items: flex-end;

    &__input {
      font-size: 16px;
      font-weight: 500;
      color: #000;
      padding: 5px;
      min-width: 220px;
      border: 2px solid #000;
      border-right: none;
      outline: none;
      transition: all 0.3s ease-in;
    }

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
