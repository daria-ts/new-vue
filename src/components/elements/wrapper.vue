<template>
  <component :is="type" class="wrapper">
    <slot />
  </component>
</template>

<script>
/**
 * Оборачивает  несколько компонент в 1. Нельзя кастомизировать
 */
export default {
  name: "Wrapper",
  props: {
    /**
     * html-элемент, использующийся как враппер, по умолчанию div.
     */
    type: {
      type: String,
      default: "div"
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include reset;
  @include inset-space($space-l);
  @include p-lg; //for text
  width: 100%;
  @media #{$br-md} {
    @include inset-space($space-xl);
  }
}
</style>

<docs>
  ```jsx
  <Wrapper>Чтобы обернуть компоненты вместе</Wrapper>
  ```
</docs>
