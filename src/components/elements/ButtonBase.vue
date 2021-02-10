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
    @include button-l; //button-l -- for large, button-s for small
    @include btn-h; //btn-p -- for small, btn-h -- for large
    @include btn-priority-extra; // -extra (primary), -hight (dark), -normal(white, primary txt), -low (white, gray txt)
}
//TODO: из миксинов не работают -- яхз но может решу потом
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

//выравнивание иконок -- if icon visible -- comment display (пока)
.icon-r {
    margin-left: 0.5rem;
    display: none;
}
.icon-l {
    margin-right: 0.5rem;
    display: none;
}
</style>