import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('../pages/Home.vue')), 'home')
const Mine = r => require.ensure([], () => r(require('../pages/Mine.vue')), 'mine')
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'home',
            component:Home
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }

})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => {})

router.beforeEach((to, from, next) => {
    next()
})

export default router