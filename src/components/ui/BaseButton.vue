<template>
  <button
    class="base-button"
    :class="view"
  >
    {{textButton}}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    textButton: {
      type: String,
      required: true,
    },
    view: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
  .base-button {
    color: #494949;
    font-weight: 700;
    border: 2px solid #494949;
    text-transform: uppercase;
    padding: 10px 20px;
    background: none;
    transition: 0.3s all ease-out;
    outline: none;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &_red {
      display: block;
      margin: 20px auto 0;
      color: red;
      border-color: red;
    }
  }
</style>
