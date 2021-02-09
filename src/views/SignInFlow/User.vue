<template>
<header />
<h1>Это страница пользователя {{ $route.params.name }}<h1>
</template>


<script>
import { reactive, toRefs } from '@vue/composition-api'

export default {
    
    setup () {
        const state = reactive({
            props: ["name"],
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>