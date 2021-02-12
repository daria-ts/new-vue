<template>
  <header />
  <h1>Это страница пользователя {{ $route.params.user }}</h1>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  // name:"User"
  setup() {
    const state = reactive({
      props: ["user"]
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss" scoped></style>
