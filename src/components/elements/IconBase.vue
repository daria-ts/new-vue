<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
//TODO: изменить размер иконок на rem
<script>
export default {
  // name: 'IconBase',
  props: {
    viewBox: { type: String, default: "0 0 24 24" },
    iconName: { type: String, default: "edit" },
    width: { type: [Number, String], default: 24 },
    height: { type: [Number, String], default: 24 },
    iconColor: { type: String, default: "currentColor" }
    // path: String
    // },
    // computed: {
    // path() {
    //   return icons[this.name];
    // },
  }
};
</script>

<style lang="scss" scoped></style>
