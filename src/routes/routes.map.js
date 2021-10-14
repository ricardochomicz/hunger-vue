
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/',
                component: () => import('../pages/Home'),
                name: 'home'
            },
            {
                path: '/loja/:companyUrl',
                component: () => import('../pages/Products'),
                name: 'products',
                props: true
            },
            {
                path: '/cart',
                component: () => import('../pages/Cart'),
                name: 'cart'
            }
        ]
    },
    
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/login',
                component: () => import('../pages/auth/Login'),
                name: 'login'
            },
            {
                path: '/register',
                component: () => import('../pages/auth/Register'),
                name: 'register'
            }
        ]
    }
]

export default routes 