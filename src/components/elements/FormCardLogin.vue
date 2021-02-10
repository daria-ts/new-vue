<template>
    <div class="wrapper">
        <h2>ВХОД ДЛЯ КЛИЕНТОВ</h2>
        <form class="login" action="">
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
    @include fixed-login;
    flex-direction: column;
    height: 15.5rem;
    justify-content: space-between;
    align-items: flex-start;
}
h2 {
    color: $neutral-300;
   
}
.login {
    @include fixed-login;
    flex-direction: column;
    justify-content: flex-start;

}

</style>