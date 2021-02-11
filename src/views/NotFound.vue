<template>
  <div class="box">
    <h1>Упс!<br />Похоже, что-то пошло не так</h1>
    <a href="https://tochkasklada.ru">Вернуться на сайт</a>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>
//TODO: можно потом добавить дизайна
<style lang="scss" scoped>
@import "@/global-styles/tokens.scss";
@import "@/global-styles/colors.scss";

.box {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $neutral-800;
}
a {
  font-size: $font-m;
  color: $white;
}
</style>
