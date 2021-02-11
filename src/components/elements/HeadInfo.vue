<template>
  <div class="msg-box">
    <h3 class="header-text">Здравствуйте, {{ firstName }}!</h3>
    <icon-base class="msg-icon"><message-info /></icon-base>
  </div>
</template>

<script>
import IconBase from "../../components/elements/IconBase.vue";
import messageInfo from "../../components/elements/icons/message-info.vue";

export default {
  data() {
    return {
      firstName: "Пантелеймон",
      iconName: "check"
    };
  },
  components: { IconBase, messageInfo },
  name: "headInfo"
};
</script>
//FIXME: Цвет иконки //TODO: потом firstname должно подтягиваться из базы в
соотношении с логином //TODO: сообщения -- иконки-- должны быть связаны с
баннером по цвету. Если сообщений нет - то без иконки
<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

.header-text {
  display: inline-block;
  margin-top: 2.2rem;
  min-width: 15rem;
  align-items: left;
  text-align: end;
}
.msg-box {
  height: 2.625rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
.msg-icon {
  /* display: none; */
  margin: 0.8rem 0.8rem 0rem 0.5rem;
}
@media (min-width: $br-md) {
  .msg-box {
    padding-right: 1rem;
  }
}
@media (max-width: $br-sm) {
  .msg-box {
    max-width: 80%;
  }
}
</style>
