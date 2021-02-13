<template>
  <div class="pwa-list">
    <ul id="pwalist" class="list">
      <li v-for="item in items" :key="item.pwa">{{ item.pwa }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PwaList",
  data() {
    return {
      items: [
        { pwa: "Работает на любых устройствах" },
        { pwa: "Весит меньше 1 Мб" },
        { pwa: "Не нужно обновлять" },
        { pwa: "Можно пользоваться без\u00A0интернета" },
        { pwa: "Быстро грузится" },
        {
          pwa: "Гарантирует безопасность ваших данных и\u00A0конфиденциальность"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-block: 1.5rem;
}

li {
  min-width: 9.5rem;
  max-width: 18.5rem;
  text-align: left;
  padding: 0.35rem;
  margin-left: 1rem;
}
//список с фоном
.pwa-list {
  float: right;
  position: absolute;
  width: 30%;
  min-width: 15.7rem;
  background: $neutral-050;
  border: solid $neutral-200;
  border-width: 1px 0px 0px 1px;
  box-sizing: border-box;
  right: 0px;
  bottom: 0px;
}
@media (max-width: $br-sm) {
  .pwa-list {
    display: none;
  }
}
</style>
