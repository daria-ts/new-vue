<template>
  <div class="form-card">
    <LogoFull @click="showLogin = false" bg="logo-on-white"></LogoFull>
    <FormCardLogin v-if="showLogin"/>
    <FormCardSignup v-else/>
    <FormCardLinks @click="showLogin = true"/>
  </div>
</template>
//bg = on-whine/red/black -- в зависимости от фона
<script>
import LogoFull from "@/components/elements/LogoFull.vue";
import FormCardLinks from "@/components/elements/start-page/FormCardLinks.vue";
import FormCardLogin from "@/components/elements/start-page/FormCardLogin.vue";
import FormCardSignup from "@/components/elements/start-page/FormCardSignup.vue";
import { ref } from 'vue'

export default {
  components: { LogoFull, FormCardLinks, FormCardLogin, FormCardSignup },
  

  name: "FormCard",
  setup() {
    const showLogin = ref(true)
    return {showLogin}
  }
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
