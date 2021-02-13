<template>
  <component
    :is="wrapper"
    :class="['input', { 'input-expand': width === 'expand' }]"
  >
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      :disabled="disabled"
      :type="type"
      :value="value"
      :class="state"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
    <!-- <span class="validity"></span> добавить нормальную валидацию-->
  </component>
</template>

//TODO: добавить примечания и подсказки к полю //TODO: добавить для ошибок
//TODO: добавить маски //TODO: add required, pattern(validation), autocomplete
(on,"new-password","current-password")
<script>
/**
 * Для короткого текста или чисел -- в одну строку
 */
export default {
  name: "Input",
  props: {
    /**
     * Тип поля: `text, number, email, phone`
     */
    type: {
      type: String,
      default: "text",
      validator: value => {
        return value.match(/(text|number|email|tel|password)/);
      }
    },
    /**
     * Значение по умолчанию
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Placeholder.
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * Label -- по умолчанию отсутствует.
     */
    label: {
      type: String,
      default: null
    },
    /**
     *  Html-таг враппера.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div|section)/);
      }
    },
    /**
     * Уникальный идентификатор поля ID.
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Длина поля.
     * `auto, expand`
     */
    width: {
      type: String,
      default: "expand",
      validator: value => {
        return value.match(/(auto|expand)/);
      }
    },
    /**
     * Задать статус disabled.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Принудительно сделать поле активным, в фокусе, наведении.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(hover|active|focus)/);
      }
    }
  },
  methods: {
    onInput(value) {
      this.$emit("change", value);
    },
    onFocus(value) {
      this.$emit("focus", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/styles.scss";
$color-placeholder: tint($neutral-500, 10%);
.input {
  @include stack-space($space-s); //для пробелов между полями
  width: auto;
  &-expand {
    width: 100%;
  }
  label {
    cursor: pointer;
    display: block;
    @include p-sm; //шрифт заголовка формы, можно изменить p-lg or p-sm
    @include stack-space($space-xs); //расстояние между лейблом и формой
    text-align: left;
    //padding-inline-start: $space-s; выравнивание лейбла с плейсхолдером
  }
  input {
    @include reset;
    @include input-flat; //input-border or input-flat -- не смогла определиться
    @include inset-squish-space($space-s); //отступ текста от формы
    transition: all 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
    color: $neutral-800;
    width: 100%;
    margin: 0;
    /* border:  $border-xs solid $neutral-400; */
    box-shadow: none;
    &::-webkit-input-placeholder {
      -webkit-font-smoothing: antialiased;
      color: $color-placeholder;
    }
    &:-ms-input-placeholder {
      color: $color-placeholder;
    }
    &::-moz-placeholder {
      color: $color-placeholder;
      -moz-osx-font-smoothing: grayscale;
      opacity: 1;
    }
    &:hover,
    &.hover {
      box-shadow: $input-shadow-inner;
    }
    &:focus,
    &.focus {
      transition: box-shadow 0.2s ease;
      box-shadow: $input-shadow-focus;
      outline: none;
      outline-offset: 0;
    }
    &[disabled] {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: $neutral-100;
      color: $neutral-200;
      cursor: not-allowed;
      &:hover,
      &.hover {
        box-shadow: none;
      }
    }
    &[pass] {
      font-size: $font-l;
    }
  }
}
//TODO: нормальную валидацию добавить
input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-right: 25px;
  color: #8b0000;
}
input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: -45px;
  color: #009000;
}
</style>
