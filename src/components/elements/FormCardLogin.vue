<template>
  <div class="wrapper">
    <h2>ВХОД ДЛЯ КЛИЕНТОВ</h2>
    <form class="login" action="">
      <InputBase class="child" />
      <InputBase class="child" />
      <ButtonBase priority="extra">Войти</ButtonBase>
    </form>
    <ButtonBase disabled="disabled" priority="hight" icon="null" font="paragraph" is="a" size="s">test АААА</ButtonBase>
  </div>
</template>

<script>
import ButtonBase from "../../components/elements/ButtonBase.vue";
import InputBase from "../../components/elements/InputBase.vue";

export default {
  components: { ButtonBase, InputBase },
  name: "FormCardLogin"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

//FIXME: не работает регистрация стилей -- приходится каждый раз сюда вставлять 😏
.wrapper {
  @include fixed-login;
  flex-direction: column;
  height: 15.5rem;
  justify-content: space-between;
  align-items: flex-start;
}
h2 {
  color: $neutral-300;
}
.login {
  @include fixed-login;
  flex-direction: column;
  justify-content: flex-start;
  /* gap: $space-s; */
  // FIXME: не работает в сафари. Временно через margin .child
}

.child {
  margin-bottom: $space-s; // расстояние между полями формы
}
</style>
