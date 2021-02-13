<template>
  <div class="link-block">
    <router-link class="caption" :to="{ name: 'recover' }">{{
      recoverTxt
    }}</router-link>
    <router-link class="caption" :to="{ name: 'register' }">{{
      registerTxt
    }}</router-link>
  </div>
</template>
// TODO:
<router-link
  class="caption"
  :to="{ name: 'login' }">{{recoverTxt}}</router-link>

<script>
export default {
  data() {
    return {
      recoverTxt: "Не помню пароль",
      registerTxt: "Регистрация",
      loginTxt: "Войти"
    };
  },

  name: "FormCardLinks"
};
</script>

//TODO: сделать смену блока -- в зависимости от страницы и разный текст местами
типа if current page '/'name === link-name hide link

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

.link-block {
  @include fixed-login;
  justify-content: space-between;
}

.caption {
  text-decoration: none;
  color: $primary-500;
}
.caption:hover {
  text-decoration-line: underline;

  //TODO: animate transition
}
</style>
