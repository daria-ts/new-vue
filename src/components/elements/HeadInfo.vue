<template>
    <div class="msg-box">
      <h3 class="header-text">Здравствуйте, {{firstName}}!</h3>
      <icon-base class="info" ><message-info /></icon-base>
     </div>
</template>

<script>
import IconBase from '../../components/elements/IconBase.vue';
import messageInfo from "../../components/elements/icons/message-info.vue";

export default {
  data() {
    return {
      firstName: 'Пантелеймон',
      iconName: 'check'
    };
  },
  components: { IconBase, messageInfo },
  name: "headInfo"
};
</script>

//TODO: потом firstname должно подтягиваться из базы в соотношении с логином
//TODO: сообщения -- иконки-- должны быть связаны с баннером по цвету. Если сообщений нет - то без иконки
<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/tokens.scss";
.header-text{
    padding: 0.8rem;
    width: 17.5rem;
    text-align: end;
  }
  .msg-box {
    display: flex;
    align-items: center;
    padding-right: 2rem;
  }
  .info{
    fill: $secondary-500;
    
  }
  @media (min-width: $br-md){
   
    .msg-box {
    padding-right: 1rem;
  }
  }
</style>