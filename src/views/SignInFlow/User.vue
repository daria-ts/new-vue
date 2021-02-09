<template>
<header />
<h1>Это страница пользователя {{ $route.params.name }}<h1>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'

export default {
   props: ["name"],
}
</script>

<style lang="scss" scoped>

</style>