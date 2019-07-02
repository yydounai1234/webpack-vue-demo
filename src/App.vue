<template>
    <div :class="$style.app">{{value}}</div>
</template>
<script>
export default {
    name:'App',
    data() {
        return {
            value:'webpack-vue-template'
        }
    },
    created() {
        console.log('HELLO WORLD')
    }
}
</script>
<style module scoped>
    .app{
        color:blue
    }
</style>