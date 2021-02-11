<template>
<component 
    :is="type" :href="href" :type="submit" :class="['button', size, state, priority, icon, font]">
        <icon-base class="icon-l"><Check /></icon-base>
        <slot/>
        <icon-base class="icon-r"><Check /></icon-base>
</component>
</template>

<script>
 import IconBase from "@/components/elements/IconBase.vue";
 import Check from "../../components/elements/icons/check.vue";

//TODO: логика, добавить иконку чек в кружочке в файлы svg

export default {
    data() {
        return {
            
            //html element for  button:`button, a`

            type: {
                type: String,
                default: "button",
                validator: value => {
                    return value.match(/(button|a)/)
                },
            },

            //Размер по умолчанию большая: `s, l`
    
            size: {
                type: String,
                default: "l",
                validator: value => {
                    return value.match(/(l|s)/)
                },
            },

            //Если тип -- ссылка, то есть опция href.

            href: {
                type: String,
                default: null,
            },

            // Set the button’s type to “submit”

            submit: {
                type: String,
                default: null,
                validator: value => {
                    return value.match(/(null|submit)/)
                },
            },
            // Приоритеты кнопок -- чтобы проще было устанавливать стили:
            //`extra, hight, normal, low`
            //по факту primary, dark, white-prymary-txt, white-gray-txt
        
            priority: {
                type: String,
                default: normal,
                validator: value => {
                    return value.match(/(extra|height|normal|low)/)
                },
            },
            //наличие иконки и сторона
            icon: {
                type: String,
                default: null,
                validator: value => {
                    return value.match(/(null|left|right)/)
                },
            },

            //шрифт -- по умолчанию заголовочный 
            font: {
                type: String,
                default: head,
                validator: value => {
                    return value.match(/(head|paragraph)/)
                },
            },
    
    };
 
    components: { IconBase, Check }
    name: "ButtonBase";
    },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

button {
    @include reset;
    @include button-template;
   
    // Sizes button-l -- for large, button-s for small
    &.l{
        @include button-l; 
    }
    &.s{
        @include button-s; 
    }   
    // Priority -extra (primary), -hight (dark), -normal(white, primary txt), -low (white, gray txt)
    &.extra {
        @include btn-priority-extra;
    }
    &.hight {
        @include btn-priority-hight;
    }
    &.normal {
        @include btn-priority-hight;
    }
    &.low {
        @include btn-priority-hight;
    }
    //icon
    &.left {
        float: left;
        /* margin-right: 0.5rem; */
        display: none;
    }
    &.right {
        float: left;
        /* margin-right: 0.5rem; */
        display: none;
    }
    //font
    &.head {
        @include btn-h;
    }
    &.paragraph {
        @include btn-p;
    }

}



    @include btn-h; //btn-p -- for small, btn-h -- for large
@include btn-priority-extra; // -extra (primary), -hight (dark), -normal(white, primary txt), -low (white, gray txt)
//TODO: из миксинов не работают -- яхз но может решу потом
/* button:hover {
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
} */

//выравнивание иконок -- if icon visible -- comment display (пока)
//.icon-r {
   // float: right;
    /* margin-left: 0.5rem; */
   // display: none;
//}
//.icon-l {
   // float: left;
    /* margin-right: 0.5rem; */
    //display: none;
//}
</style>

<docs>
  ```jsx
  <div>
    <Button priority="extra" size="l" icon="left" font="paragraph">Primary Button</Button>
    <Button priority="extra" size="l" icon="right" font="paragraph">Primary Button</Button>
    <Button priority="extra" size="s">Small</Button>
    <Button priority="height" size="s">Small</Button>
    <Button priority="normal" size="s">Small</Button>
    <Button priority="low" size="s">Small</Button>
    <br />
    <Button>Default Button</Button>
    <Button state="hover">:hover</Button>
    <Button state="active">:active</Button>
    <Button state="focus">:focus</Button>
  </div>
  ```
</docs>