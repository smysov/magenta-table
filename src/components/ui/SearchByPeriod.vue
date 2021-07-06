<template>
  <form
    class="period"
    @submit.prevent="performSearchByPeriod"
  >
    <div class="period__group">
      <label for="from">Искать с</label>
      <input
        class="period__input"
        @input="fromInput"
        :value="fromQuery"
        type="date"
        id="from"
      >
    </div>
    <div class="period__group">
      <label for="to">Искать по</label>
      <input
        class="period__input"
        @input="toInput"
        :value="toQuery"
        type="date"
        id="to"
      >
    </div>
    <base-button textButton="Найти" />
  </form>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'SearchByPeriod',
  components: {
    BaseButton,
  },
  props: {
    fromQuery: {
      type: String,
      required: true,
    },
    toQuery: {
      type: String,
      required: true,
    },
  },
  methods: {
    fromInput(e) {
      console.log(e.target.value);
      this.$emit('fromInput', e.target.value);
    },
    toInput(e) {
      console.log(e.target.value);
      this.$emit('toInput', e.target.value);
    },
    performSearchByPeriod() {
      this.$emit('performSearchByPeriod');
    },
  },
};
</script>

<style lang="scss">
  .period {
    display: flex;
    align-items: flex-end;
    column-gap: 5px;

    &__group {
      display: flex;
      flex-direction: column;
    }

    &__input {
      font-size: 16px;
      font-weight: 500;
      color: #000;
      padding: 5px;
      min-width: 220px;
      border: 2px solid #000;
      outline: none;
      transition: all 0.3s ease-in;
      background: none;
    }
  }
</style>
