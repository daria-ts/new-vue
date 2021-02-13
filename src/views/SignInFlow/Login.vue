<template>
  <div class="wrapper">
    <FormCard class="form-card" />
    <UnregisteredUserBg class="login-bg" />
  </div>
</template>

// TODO: добавить ссылки -- лучше всплывашки подсказки
<script>
import FormCard from "@/components/elements/start-page/FormCard.vue";
import UnregisteredUserBg from "@/components/elements/start-page/UnregisteredUserBg.vue";

export default {
  components: { UnregisteredUserBg, FormCard },
  name: "Login"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

.wrapper {
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
}

.form-card {
  position: absolute;
  margin-block-start: 7.4rem;
  margin-inline-start: 15%;
  margin-inline-end: 3rem;
}
@media (min-width: $br-md) {
  .form-card {
    margin-block-start: 12rem;
    margin-inline-start: 22%;
  }
}
@media (max-width: $br-sm) {
  body {
    position: fixed;

    .form-card {
      position: absolute;
      top: 8vh;
      bottom: 14vh;
      left: 0;
      right: 0;
      margin-block-start: auto;
      margin-block-end: 25vh;
      padding-block: 10%;
      width: 70vw;
      height: 25rem;
      margin: auto;

      animation: animcardstart 1.1s ease-in-out 1 normal forwards;
      @keyframes animcardstart {
        0% {
          transform: translateX(-12rem);
          opacity: 0;
        }
        20% {
          transform: translateX(-12rem);
          opacity: 0;
        }
        100% {
          transform: translateX(0rem);
          opacity: 1;
        }
      }

      @keyframes animcardstart {
        0% {
          transform: translateY(8rem);
          opacity: 0;
        }
        20% {
          transform: translateY(8rem);
          opacity: 0;
        }
        100% {
          transform: translateY(0rem);
          opacity: 1;
        }
      }
      /* margin-left: calc(50vh - 19.25rem); */
    }
  }
}
</style>
