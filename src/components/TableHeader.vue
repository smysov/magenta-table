<template>
  <tr>
    <th
      v-for="field of fields"
      :key="field.key"
    >
      {{ field.name }}
    </th>
  </tr>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  th {
    position: sticky;
    top: 0;
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    padding: 5px 0;
    border: 1px solid rgba(0, 0, 0, 1);
    background-color: #8bbb79;
    z-index: 2;
  }
</style>
