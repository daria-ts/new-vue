<template>
    <h4>Что дает личный кабинет?</h4>
    
    <div class="wrapper">
         <div class="start-bg">
            <div >
                <h1>start-bg</h1>
            </div>
        </div>
        <div class="sign-foo"><h1>sign-foo</h1></div>
    </div> 
    
        <div class="left-block">Личный кабинет создан
по&nbsp;технологии <nobr>PWA-приложения:</nobr></div>
        <div class="left-list"> 
        <ul>
            <li>Работает на любых устройствах</li>
            <li>Весит меньше 1 Мб</li>
            <li>Не требует обновлений</li>
            <li>Может использоваться без&nbsp;интернета</li>
            <li>Быстро грузится</li>
            <li>Обеспечивает безопасную ваших данных и&nbsp;конфиденциальность</li>
        </ul>
        </div>
        
    
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style lang="scss" scoped>

//styles 

@import "@/global-styles/colors.scss";
@import "@/global-styles/tokens.scss";


.wrapper {
    display: flex;
 flex-direction: column;
    padding-top: 4.08rem;
    height: -webkit-calc(100vh - 4.08rem);
    height: calc(100vh - 4.08rem);
align-items: left;
width: 100%;

}
.sign-foo {
    height: 4.08rem;
width: 62%;
text-align: right;
}

.start-bg {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    height: -webkit-calc(100vh - 8.08rem);
    height: calc(100vh - 8.08rem);
    padding: 6px 0px;
    width: 88%;
    border:  solid $neutral-200;
    border-width: 1px 1px 1px 0px;

}

h4 {
position: absolute;
margin: 0px;
padding: 2.875rem 1.375rem 0.25rem 4.5625rem;

background: $neutral-050;
    border:  solid $neutral-200;
    border-width: 0px 1px 1px 0px;
    box-sizing: border-box;
left: 0px;
top: 0px;
}

ul {
display: flex;
flex-direction: column;
align-items: flex-start;
padding-block: 1.5rem;
}

li {
    min-width: 12.5rem;
    max-width: 18.5rem;
    text-align: left;
    padding: 0.35rem;
    margin-left: 1rem;
}

.left-list {
    position: absolute;
    width: 25%;
    min-width: 17.7rem;
    background: $neutral-050;
    border:  solid $neutral-200;
    border-width: 1px 0px 0px 1px;
    box-sizing: border-box;
    right: 0px;
    bottom: 0px;
}

.left-block {
    position: absolute;
    padding-right: 38%;
    width: 14.75rem;

    right: 0px;
    bottom: 83px;
    
    text-align: right;
}

@media (min-width: $br-md){
    h4 {
        padding: 2.875rem 3.75rem 0.25rem 10.375rem;
        
    }
    .start-bg {
        width: 80%;
    }
    .sign-foo {
        width: 74%;
    }
    .left-block {
    padding-right: 26%;
    }
}

@media (max-width: $br-sm){
    h4 {
        text-align: center;
        padding: 2.875rem 0rem 0.25rem 0rem;
        width: 100%;
    }
    .start-bg {
        width: 100%;
    }
    .left-list {
        display: none;
    }
    .sign-foo {
        width: 100%;
        text-align: center;
    }
    .left-block {
     display: none;
    }
}

</style>
