<template>
    <div class="form-card">
        <LogoFull bg="logo-on-white"></LogoFull>
        <FormCardLogin />
        <FormCardLinks />
    </div>
</template>

<script>
import LogoFull from "@/components/elements/LogoFull.vue";
import FormCardLinks from "@/components/elements/FormCardLinks.vue";
import FormCardLogin from "@/components/elements/FormCardLogin.vue";
export default {
        components: { LogoFull, FormCardLinks, FormCardLogin },
        name: "FormCard"
}
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";
body {
    background: transparent;
}
.form-card {
  @include card-wrapper;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  width:14.75rem;
  height: 22.375rem;
  z-index: $z-10;
  margin-top: 7.4rem;
  margin-left: 15%;
  margin-right: 3rem;
  background-color: rgba($white, .92);
  animation: animcardstart 1.3s ease-in-out 1 normal forwards;
  @keyframes animcardstart {
      0% {
        transform: translateX(-12rem);
        opacity: 0;
      }
      20% {transform: translateX(-12rem);
        opacity: 0;
        }
      100% {
        transform: translateX(0rem);
        opacity: 1;
      }
    }
}

.form-block{
    background: $secondary-100;
    
}

@media (min-width: $br-md) {
  .form-card {
      margin-top: 12rem;
    margin-left: 22%;
  }}
  @media (max-width: $br-sm) {
   .form-card {
  margin-top: 38%;
  margin-left: 5%;
  width: -webkit-calc(90% - 4.5rem);
  width: calc(90% - 4.5rem);
  height: -webkit-calc(60% - 4.5rem);
  height: calc(60% - 4.5rem);
  min-height: 25rem ;
  
  @keyframes animcardstart {
      0% {
        transform: translateY(8rem);
        opacity: 0;
      }
      20% {transform: translateY(8rem);
        opacity: 0;
        }
      100% {
        transform: translateY(0rem);
        opacity: 1;
      }
    }
  /* margin-left: calc(50vh - 19.25rem); */
  
  }}
</style>