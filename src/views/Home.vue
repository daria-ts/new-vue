<template>
  <div class="home">
    <Header />

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link class="caption" :to="{ name: 'welcome' }">login</router-link>
    <router-link class="caption" :to="{ name: 'components' }"
      >components</router-link
    >
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header
  }
};
</script>
