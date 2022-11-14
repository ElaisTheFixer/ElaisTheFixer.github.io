import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/lock-liquidity',
            name: 'lock-liquidity',
            component: () =>
                import ('../views/LockView.vue')
        },
        {
            path: '/withdraw-liquidity',
            name: 'withdraw-liquidity',
            component: () =>
                import ('../views/WithDrawView.vue')
        }
    ]
})

export default router