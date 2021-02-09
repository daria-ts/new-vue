<template>
   <header>
     <icon name="app-logo"/>
      <h1>Vue Events</h1>
    </header>
</template>

<script>
import Icon from "../../components/elements/Icon.vue";

export default {
  data() {
    return {
      firstName: 'Пантелеймон'
    };
  },
  components: { Icon },
  name: "TestOne"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/tokens.scss";

form {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $secondary-100;

}

button{
  
  margin: 1rem;
  width: 100px;
  height: 3rem;
  border-radius: $radi-m;
  border: 1px solid $neutral-200;
 
  
  

}
input{
  height: 2rem;
  margin: 1rem;
  border-radius: $radi-m;
  border: 1px solid $neutral-200;

}
</style>
