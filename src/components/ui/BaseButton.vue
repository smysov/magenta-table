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
      color: red;
      border-color: red;
    }
    &_green {
      color: green;
      border-color: green;
    }
    &_clear {
      background: red;
      color: #fff;
      border-color: red;
      &:active,
      &:focus {
        background: crimson;
        color: #fff;
        border-color: crimson;
        border-radius: 5px;
      }
    }
    &_adding {
      color: #fff;
      border-color: green;
      background: green;
      &:focus {
        color: green;
        border-color: green;
        background: transparent;
      }
      &:active {
        transform: scale(0.98);
        color: #013d01;
        border-color: #013d01;
      }
    }
  }
</style>
