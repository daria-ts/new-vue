<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: "SigninCard"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/tokens.scss";

.container {
  width: 19.25rem;
  height: 26.875rem;
  background: $white;
  opacity: $bg-opasity;
  box-shadow: $card-shadow;
  border-radius: $radi-m;
}
</style>
