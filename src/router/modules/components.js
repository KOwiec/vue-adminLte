import Layout from '@/layout'
const componentsRouter = {
    path: '/components',
    name: 'Components',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: 'Components', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-puzzle-piece' },
    children: [
        {
            path: 'sticky',
            name: 'Sticky',
            component: () => import('@/views/components/sticky/index.vue'),
            meta: { title: 'Sticky', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
        },
        {
            path: 'sticky-navbar',
            name: 'StickyNavbar',
            component: () => import('@/views/components/sticky/index.vue'),
            meta: { title: 'Sticky to NavBar', bodyClass: 'layout-navbar-fixed', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'sticky-screen',
            name: 'StickyScreen',
            component: () => import('@/views/components/sticky/index.vue'),
            meta: { title: 'Sticky to screen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'error-logs',
            name: 'ErrorLogs',
            component: () => import('@/views/components/errorLog/index.vue'),
            meta: { title: 'Error Logs', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'json-editor',
            name: 'JsonEditor',
            component: () => import('@/views/components/json-editor/index.vue'),
            meta: { title: 'JSON Editor', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
    ]
}

export default componentsRouter