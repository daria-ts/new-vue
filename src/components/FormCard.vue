<template>
    <div class="form-card">
        <div class="logo-block">logo-block</div>
        <div class="form-block">form-block</div>
        <div class="link-block">logo-block</div>
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: $space-l;
  width:14.75rem ;
  height: 22.375rem;
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
.logo-block{
    background: $secondary-100;
    
}
.form-block{
    background: $secondary-100;
    
}
.link-block{
    background: $secondary-100;
    
}
@media (min-width: $br-md) {
  .form-card {
    margin-left: 66%;
  }}
  @media (max-width: $br-sm) {
   .form-card {
  margin-top: 30%;
  margin-left: 5%;
  width: -webkit-calc(90% - 4.5rem);
  width: calc(90% - 4.5rem);
  height: -webkit-calc(60% - 4.5rem);
  height: calc(60% - 4.5rem);
  
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