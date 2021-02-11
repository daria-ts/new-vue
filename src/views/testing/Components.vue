<template>
  <header>
    <div class="header">
      <icon name="app-logo" />
      <HeadBack></HeadBack>
    </div>
    <hr />
  </header>
</template>

<script>
import headBack from "../../components/elements/HeadBack.vue";
import Icon from "../../components/elements/Icon.vue";

export default {
  components: { Icon, headBack },
  name: "Components"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";
header {
  width: auto;
  height: 5rem;
  max-width: 73.5rem;
  margin-left: auto;
  margin-right: auto;
  background-color: $neutral-010;
}

.header {
  padding: 1.6rem 0 0 0;
  display: flex;
  justify-content: space-between;
  height: 3rem;
}

hr {
  border: none;
  color: $neutral-200;
  background-color: $neutral-200;
  height: 1px;
  float: right;
  width: calc(100% - 4.08rem);
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
}

@media (min-width: $br-md) {
  hr {
    width: 110%;
    padding-left: -2rem;
    float: none;
  }
}
</style>
