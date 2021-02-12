<template>
  <component
    :is="wrapper"
    :class="['input', { 'input-expand': width === 'expand' }]"
  >
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      :disabled="disabled"
      :type="type"
      :value="value"
      :class="state"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
  </component>
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
  @include input-flat; //input-border or input-flat -- не смогла определиться
}
</style>
