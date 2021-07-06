<template>
  <form
    class="period"
    @submit.prevent="performSearchByPeriod"
  >
    <base-input
      idFor="from"
      v-model="fromPeriod"
      label="Искать с"
      types="date"
      placeholder="2000-02-14"
      className="base-input_period"
    />
    <base-input
      idFor="to"
      v-model="toPeriod"
      label="Искать по"
      types="date"
      placeholder="2021-01-11"
      className="base-input_period"
    />
    <base-button textButton="Найти" />
  </form>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'SearchByPeriod',
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      fromPeriod: '',
      toPeriod: '',
    };
  },
  methods: {
    performSearchByPeriod() {
      this.$emit('input', this.fromPeriod, this.toPeriod);
    },
  },
};
</script>

<style lang="scss">
  .period {
    display: flex;
    align-items: flex-end;
    column-gap: 5px;
  }
</style>
