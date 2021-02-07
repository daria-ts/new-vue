<template>
  <div class="about">
    <Header />
    <!-- <SigninCard /> -->
    <h1>Статус пользователя – верифицирован</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
// import SigninCard from "@/components/SigninCard.vue";

export default {
  name: "Home",
  components: {
    // SigninCard,
    Header
  }
};
</script>
