<template>
    <div>
        <div :class="$style.app">{{value}}</div>
        <router-link to="/">首页</router-link>
        <router-link to="/mine">我的</router-link>
        <router-view></router-view>
    </div>
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