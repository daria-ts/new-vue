<template>
<button><icon-base class="icon-l"><Check /></icon-base>{{buttonText}}
    <icon-base class="icon-r"><Check /></icon-base>
</button>
</template>

<script>
 import IconBase from "@/components/elements/IconBase.vue";
 import Check from "../../components/elements/icons/check.vue";


export default {
    data() {
    return {
        buttonText:'ButtonName'
        
        
    }
},
    components: { IconBase, Check },
    name: "ButtonBase"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

button {
    @include button-l;
    @include btn-h;
    @include btn-priority-extra;
}

button:hover {
    box-shadow: $btn-shadow-inner;
}
button:active {
    
    box-shadow: none;
    outline: 0;
    outline-offset: 0;
}
button:focus {
    
    box-shadow: none;
    outline: 0;
    outline-offset: 0;
}

//выравнивание иконок
.icon-r {
    margin-left: 0.5rem;
    display: none;
}
.icon-l {
    margin-right: 0.5rem;
    display: none;
}
</style>