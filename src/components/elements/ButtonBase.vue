<template>
  <component
    :is="type"
    :href="href"
    :type="submit"
    :class="['button', size, state, priority, icon, font]"
  >
    <icon-base class="icon-l"><Check /></icon-base>
    <slot />
    <icon-base class="icon-r"><Check /></icon-base>
  </component>
</template>

<script>
import IconBase from "../../components/elements/IconBase.vue";
 import Check from "../../components/elements/icons/check.vue";
 

//TODO: логика, добавить иконку чек в кружочке в файлы svg
export default {
    components: { IconBase, Check },
    props: {
        type: { //html element for  button:`button, a`
            type: String,
            default: "button",
            validator: value => {
            return value.match(/(button|a)/);
            }
            },
        
        size: { //Размер по умолчанию большая: `s, l`
            type: String,
            default: "l",
            validator: value => {
            return value.match(/(l|s)/);
            }
        },
        href: { //Если тип -- ссылка, то есть опция href.
            type: String,
            default: null
        },
        
        submit: {// Set the button’s type to “submit”
            type: String,
            default: null,
            validator: value => {
            return value.match(/(null|submit)/);
            }
        },
        priority: {
            type: String,
            default: "normal",
            validator: value => {
            return value.match(/(extra|height|normal|low)/);
            }
        },
    }

    
};
</script>
<style lang="scss" scoped>
@import "@/global-styles/styles.scss";

.button {
    @include reset;
  @include button-template;

  // Sizes button-l -- for large, button-s for small
  &.l {
    @include button-l;
  }
  &.s {
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
    @include btn-priority-normal;
  }
  &.low {
    @include btn-priority-low;
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
 button:hover {
     box-shadow: $btn-shadow-inner;
 }   

</style>