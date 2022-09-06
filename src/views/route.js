export default [
    {
        path: '/',
        name: 'home',
        component: import('./pages/index.vue')
    },
    {
        path: '/form',
        name: 'form',
        component: import('./pages/form.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: import('./pages/about.vue')
    },
    {
        path: '/count',
        name: 'count',
        component: import('./pages/count.vue')
    }
]