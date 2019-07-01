<template>
    <div id="app">{{value}}</div>
</template>
<script>
export default {
    name:'App',
    data() {
        return {
            value:'我是神我是一个小天才'
        }
    },
    created() {
        console.log(1111111111111111111111111111)
    }
}
</script>
<style scoped>
    #app{
        color:red
    }
</style>