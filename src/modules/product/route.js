import ProductDahboard from './view/dashboard.vue'
import ProductCreate from './view/create.vue'

export default [
    {
        path: '/products',
        name: 'Product',
        component: ProductDahboard,
        children: [
          { path: '/products/create', name: 'ProductsCreate', component: ProductCreate}
        ]
    }
];