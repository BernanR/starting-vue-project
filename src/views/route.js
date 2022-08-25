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
]