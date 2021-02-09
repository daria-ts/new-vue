<template>
   <header>
     <div class="header">
     <icon name="app-logo"/>
     <div class="msg-box">
      <h3 class="header-text">Здравствуйте, {{firstName}}!</h3>
      <icon-base><check /></icon-base>
     </div>
     </div>
     <hr />
    </header>
</template>

<script>
import Icon from "../../components/elements/Icon.vue";
import IconBase from '../../components/elements/IconBase.vue';
import Check from "../../components/elements/icons/check.vue";

export default {
  data() {
    return {
      firstName: 'Пантелеймон',
      iconName: 'check'
    };
  },
  components: { Icon, IconBase,Check },
  name: "TestOne"
};
</script>

//TODO: потом firstname должно подтягиваться из базы в соотношении с логином


<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/tokens.scss";
header{
  width: auto;
  height: 5rem;
  max-width: 73.5rem;
  margin-left: auto;
  margin-right: auto;
  background-color:$neutral-010;

}

  .header {
    padding: 1.6rem 0 0 0;
    display: flex;
    justify-content: space-between;
    height: 3rem;
    

  }
  .header-text{
    padding: 0.8rem;
    width: 17.5rem;
    text-align: end;
  }
  msg-box{
    display: flex;
  }
  hr{
    border: none; 
    color: $neutral-200; 
    background-color:$neutral-200; 
    height: 1px;
    float: right;
    width: calc(100% - 4.08rem);
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
  }

  IconBase {
iconColor:  '$primary-500'
  }

</style>
