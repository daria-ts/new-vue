<template>
  <div class="form-card">
    <LogoFull bg="logo-on-white"></LogoFull>
    <FormCardLogin />
    <FormCardLinks />
  </div>
</template>
//bg = on-whine/red/black -- в зависимости от фона
<script>
import LogoFull from "@/components/elements/LogoFull.vue";
import FormCardLinks from "@/components/elements/start-page/FormCardLinks.vue";
import FormCardLogin from "@/components/elements/start-page/FormCardLogin.vue";
export default {
  components: { LogoFull, FormCardLinks, FormCardLogin },
  name: "FormCard"
};
</script>
//TODO: пририсовать анимацию "моя" к логотипу
<style lang="scss" scoped>
@import "@/global-styles/styles.scss";
body {
  background: transparent;
}
.form-card {
  @include card-wrapper;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 14.75rem;
  height: 22.375rem;
  z-index: $z-10;
  background-color: rgba($white, 0.97);
}

.form-block {
  background: $secondary-100;
}

@media (max-width: $br-sm) {
  .form-card {
    width: 16em;
    height: 24em;
  }
}
</style>
