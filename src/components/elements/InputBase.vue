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
  @include input-border;   //or input-flat -- не смогла определиться
}
</style>
