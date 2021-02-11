<template>
  <div class="msg-box">
    <h3 class="header-text">Назад</h3>
    <icon-base class="arrow"><arrow-back-ios /></icon-base>
    <h3 class="header-text">{{ pageName }}</h3>
  </div>
</template>

<script>
import IconBase from "../../components/elements/IconBase.vue";
import arrowBackIos from "../../components/elements/icons/arrow-back-ios.vue";

export default {
  data() {
    return {
      pageName: "Документы",
      iconName: "check"
    };
  },
  components: { IconBase, arrowBackIos },
  name: "headBack"
};
</script>

//TODO: имя страницы -- показывается только на второстепенных страницах //TODO:
сообщения -- иконки-- должны быть связаны с баннером по цвету //TODO: обратная
ссылка

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

.header-text {
  padding-top: 1rem;
  padding-left: 1rem;
  width: auto;
  text-align: end;
}
.msg-box {
  display: flex;
  align-items: flex-end;
  align-items: center;
  padding-right: 1rem;
}
.arrow {
  padding-top: 1rem;
  width: 1rem;
  height: 1rem;
}
@media (min-width: $br-md) {
  .msg-box {
    padding-right: 1rem;
  }
}
</style>
