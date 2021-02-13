<template>
  <UnregisteredUserBg />
</template>

<script>
import UnregisteredUserBg from "@/components/elements/start-page/UnregisteredUserBg.vue";

export default {
  components: { UnregisteredUserBg },
  name: "Register"
};
</script>

<style lang="scss" scoped></style>
//IMPROVE: по идее, не нужно делать несколько страниц -- достаточно перерисовать
только форму
