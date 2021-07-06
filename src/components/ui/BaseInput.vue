<template>
  <div class="base-group">
    <label
      class="base-label"
      :for="idFor"
    >
      {{ label }}
    </label>
    <input
      class="base-input"
      @input="inputSearch"
      :value="value"
      :class="className"
      :type="types"
      :id="idFor"
      :placeholder="placeholder"
    >
    <a
      @click.prevent="resetValue(value)"
      v-show="value"
      class="base-close"
      href="#"
    ></a>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    idFor: {
      type: String,
      default: 'base-input',
    },
    placeholder: {
      type: String,
    },
    className: {
      type: String,
      default: '',
    },
    types: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    inputSearch(e) {
      this.$emit('input', e.target.value);
    },
    resetValue(value) {
      this.$emit('resetValue', value);
    },
  },
};
</script>

<style lang="scss">
  .base-group {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .base-input {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    padding: 5px;
    min-width: 220px;
    border: 2px solid #000;
    outline: none;
    transition: all 0.3s ease-in;

    &_period {
      & + .base-close {
        display: none;
      }
    }

    &_search {
      border-right: none;
      &:hover {
        opacity: 0.7;
      }
      &:focus {
        box-shadow: 0 0 10px 2px #71d66d;
      }
    }
  }
  .base-label {
    font-weight: 700;
    padding-left: 5px;
  }

  .base-close {
    &::before {
      position: absolute;
      content: '';
      bottom: 45%;
      right: 5px;
      width: 20px;
      height: 2px;
      background: #000;
      transform: rotate(45deg);
    }
    &::after {
      position: absolute;
      content: '';
      bottom: 45%;
      right: 5px;
      width: 20px;
      height: 2px;
      background: #000;
      transform: rotate(-45deg);
    }
  }
</style>
