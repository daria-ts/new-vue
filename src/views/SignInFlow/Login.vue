<template>
  <FormCard />
  <UnregisteredUserBg />
</template>

// TODO: добавить ссылки -- лучше всплывашки подсказки
<script>
import FormCard from "@/components/FormCard.vue";
import UnregisteredUserBg from "@/components/UnregisteredUserBg.vue";

export default {
  components: { UnregisteredUserBg, FormCard },
  name: "Login"
};
</script>

<style lang="scss" scoped>
//styles
</style>
