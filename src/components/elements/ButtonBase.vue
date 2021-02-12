<template>
  <component
    :is="type"
    :href="href"
    :type="submit"
    :class="['button', size, state, priority, font, disabled]"
  >
    <icon-base class="icon">
      <Check />
    </icon-base>
    <slot />
  </component>
</template>

<script>
import IconBase from "../../components/elements/IconBase.vue";
import Check from "../../components/elements/icons/check.vue";

//TODO: логика, добавить иконку чек в кружочке в файлы svg
export default {
  name: "Bttn",
  components: { IconBase, Check },
  props: {
    type: {
      //html element for  button:`button, a`
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(button|a)/);
      }
    },

    size: {
      //Размер по умолчанию большая: `s, l`
      type: String,
      default: "l",
      validator: value => {
        return value.match(/(l|s)/);
      }
    },
    href: {
      //Если тип -- ссылка, то есть опция href.
      type: String,
      default: null
    },

    submit: {
      // Set the button’s type to “submit”
      type: String,
      default: null,
      validator: value => {
        return value.match(/(null|submit)/);
      }
    },
    font: {
      //шрифт -- по умолчанию заголовочный
      type: String,
      default: "head",
      validator: value => {
        return value.match(/(head|paragraph)/);
      }
    },

    priority: {
      type: String,
      default: "normal",
      validator: value => {
        return value.match(/(extra|height|normal|low)/);
      }
      // Приоритеты кнопок -- чтобы проще было устанавливать стили:
      //`extra, hight, normal, low`
      //по факту primary, dark, white-prymary-txt, white-gray-txt
    },

    //FIXME: с иконками не работает
    //TODO: пока навешивается только на стиль -- доработать
    disabled: {
      type: String,
      default: "null",
      validator: value => {
        return value.match(/(null|disabled)/);
      }
    }
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
  //font
  &.head {
    @include btn-h;
  }
  &.paragraph {
    @include btn-p;
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
  &.disabled {
    @include button-disabled;
    cursor: not-allowed;
    &:hover,
    &.hover {
      box-shadow: none;
    }
  }

  //icon //TODO: пофиксить иконки -- пока не работает
  //TODO: пофиксить таб на мобайле
}

.icon {
  display: none;

  //icon show left
  &.left {
    float: left;
    margin-right: 0.5rem;
    display: inline;
  }
  &.right {
    float: right;
    margin-left: 0.5rem;
    display: inline;
  }
}
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
