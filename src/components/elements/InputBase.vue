<template>
  <input type="text" />
</template>

<script>
export default {
  setup() {
    return {};
  },
  name: "InputBase"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

input {
  border-radius: $radi-s;
  border: $border-xs solid $neutral-200;
  min-height: 2.4rem;
}
</style>
