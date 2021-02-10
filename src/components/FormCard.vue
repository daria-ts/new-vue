<template>
    <div><div class="form-card"></div></div>
</template>

<script>
export default {
     
        name: "FormCard"
}
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/tokens.scss";

.form-card {
  position: absolute;
  width:19.25rem ;
  height: 26.875rem;
  z-index: $z-10;
  margin-top: 4rem;
  margin-left: 58%;
  margin-right: 3rem;
  background-color:$white ;
  box-shadow: $card-shadow;
  border-radius: $radi-m;
  opacity: $bg-opasity;
   animation: animcardstart 1.3s ease-in-out 1 normal forwards;
  @keyframes animcardstart {
      0% {
        transform: translateX(8rem);
        opacity: 0;
      }
      20% {transform: translateX(8rem);
        opacity: 0;
        }
      100% {
        transform: translateX(0rem);
        opacity: 1;
      }
    }
}
@media (min-width: $br-md) {
  .form-card {
    margin-left: 66%;
  }}
  @media (max-width: $br-sm) {
   .form-card {
  margin-top: 30%;
  margin-left: 5%;
  width: 90%;
  height: 60%;
  
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