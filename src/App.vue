<template>
  <router-view />
</template>

<style lang="scss">

@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/tokens.scss";

body {
  margin:0px;
  background-color: $neutral-010;}

h1 {
  @include h-m($primary-500);
}

h4 {
@include overline($neutral-700);
}

p {
  @include p-lg;
}
li {
  @include p-sm;
}

#app {
  font-family: $pfont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  text-align: center;
  color: $neutral-700;
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $neutral-500;

    &.router-link-exact-active {
      color: $primary-500;
    }
  }
}
</style>
