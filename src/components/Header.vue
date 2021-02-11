<template>
  <header>
    <icon name="app-logo" />
    <HeadInfo class="infotxt" />
  </header>
</template>

<script>
import HeadInfo from "@/components/elements/HeadInfo.vue";
import Icon from "@/components/elements/Icon.vue";

export default {
  components: { Icon, HeadInfo },
  name: "Header"
};
</script>

//header показывается только на странице зарегистрированного пользователя
//TODO: на страницах 3-го уровня типа user/settings -- вместо имени -- название
страницы

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

header {
  display: grid;
  grid-template-columns: 3rem 1fr;
  position: fixed;
  width: 100%;
  height: 3rem;
  margin-left: auto;
  /* margin-right: auto; */
  background-color: $neutral-010;
  border-bottom: 1px solid $neutral-200;
}
.infotxt {
  position: absolute;
  right: 0;
}

@media (min-width: $br-md) {
  header {
    max-width: 73.5rem;
    position: relative;
    margin-right: auto;
    margin-left: auto;
  }
}
@media (max-width: $br-sm) {
  /* header {
      width: 100%;
      max-width: 100vw;
    } */
}
</style>
