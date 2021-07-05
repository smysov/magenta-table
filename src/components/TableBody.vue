<template>
  <tr>
    <template v-for="field of fields">
      <td :key="field.key">
        {{ user[field.key] }}
      </td>
    </template>
  </tr>
</template>

<script>
export default {
  name: 'TableBody',
  props: {
    user: {
      type: Object,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss">
  td {
    position: relative;
    font-size: 18px;
    padding: 5px 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    white-space: nowrap;

    &:first-child {
      background-color: #f6ffa2;
    }
    &:nth-child(2) {
      background-color: #f0fd74;
    }
  }
</style>
