<template>
  <router-view />
</template>

<script></script>
<style lang="scss">
@import "@/global-styles/styles.scss";

//global typography

body {
  margin: 0px;
  background-color: $neutral-010;
}

h1 {
  @include h-m($primary-500);
}
h2 {
  @include sub-lg;
}

h3 {
  @include sub-sm;
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
.caption {
  @include caption($neutral-700);
}
.feature {
  @include overline($neutral-700);
}
.feature-red {
  @include overline($primary-500);
}
* {
  @include transition-global;
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
