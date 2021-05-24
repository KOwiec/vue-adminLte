import Layout from '@/layout'
const apiRouter = {
    path: '/api',
    name: 'Api',
    redirect: 'noRedirect',
    component: Layout,
    meta:{ bodyClass: 'sidebar-mini layout-fixed', title: 'API', icon: 'fab fa-adn' },
    children: [
        {
            path: 'api-example',
            name: 'ApiExample1',
            component: () => import('@/views/Api/APIExample1'),
            meta: { title: 'API Example 1', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'api-example-2',
            name: 'ApiExample2',
            component: () => import('@/views/Api/APIExample2'),
            meta: { title: 'API Example 2', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'api-proxy',
            name: 'ApiProxy',
            component: () => import('@/views/Api/APIProxy'),
            meta: { title: 'API Proxy', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
    ]
}

export default apiRouter