<template>
  <button>
    <icon-base class="icon-l"><Check /></icon-base>{{ buttonText }}
    <icon-base class="icon-r"><Check /></icon-base>
  </button>
</template>

<script>
import IconBase from "../../components/elements/IconBase.vue";
import Check from "../../components/elements/icons/check.vue";

//TODO: логика, добавить иконку чек в кружочке в файлы svg
export default {
  data() {
    return {
      buttonText: "ButtonName"
    };
  },
  components: { IconBase, Check },
  name: "ButtonBase"
};
</script>
<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

button {
  @include button-template;
  @include button-l; //button-l -- for large, button-s for small
  @include btn-h; //btn-p -- for small, btn-h -- for large
  @include btn-priority-extra; // -extra (primary), -hight (dark), -normal(white, primary txt), -low (white, gray txt)
}
button:hover {
  box-shadow: $btn-shadow-inner;
}
</style>
