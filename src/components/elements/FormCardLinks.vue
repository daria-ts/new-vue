<template>
    <div class="link-block">
<router-link  :to="{ name: 'recover' }">Не помню пароль</router-link>
<router-link :to="{ name: 'register' }">Регистрация</router-link>
    </div>
</template>

<script>
export default {
    name: "FormCardLinks"
}
</script>

<style lang="scss" scoped>
/* .link-block{
    display: flex;
    justify-content: space-between;
    align-items: center;
} */

</style>