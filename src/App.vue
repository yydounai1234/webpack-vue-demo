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
        console.log('超越')
    }
}
</script>
<style module scoped>
    .app{
        color:blue
    }
    .name{
        font-size:12px
    }
</style>