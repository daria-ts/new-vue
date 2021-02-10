<template>
    <div class="wrapper">
        <h2>ВХОД ДЛЯ КЛИЕНТОВ</h2>
        <form action="">
            <input type="text" name="" id="">
            <input type="text" name="" id="">
            <button>Войти</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "FormCardLogin"
}
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

//FIXME: не работает регистрация стилей -- приходится каждый раз сюда вставлять 😏
.wrapper {
    display: flex;
    flex-direction: column;
    width: 14.75rem;
    justify-content: space-between;
}
h2 {
    color: $neutral-300;
   
}
</style>