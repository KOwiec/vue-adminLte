import Layout from '@/layout'
const componentsRouter = {
    path: '/components',
    name: 'Components',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: 'components', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-puzzle-piece' },
    children: [
        {
            path: 'sticky',
            name: 'Sticky',
            component: () => import('@/views/components/sticky/index.vue'),
            meta: { title: 'sticky', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
        },
        {
            path: 'sticky-navbar',
            name: 'StickyNavbar',
            component: () => import('@/views/components/sticky/index.vue'),
            meta: { title: 'stickyNav', bodyClass: 'layout-navbar-fixed', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'sticky-screen',
            name: 'StickyScreen',
            component: () => import('@/views/components/sticky/index.vue'),
            meta: { title: 'tickyScreen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'error-logs',
            name: 'ErrorLogs',
            component: () => import('@/views/components/errorLog/index.vue'),
            meta: { title: 'errorLogs', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'json-editor',
            name: 'JsonEditor',
            component: () => import('@/views/components/json-editor/index.vue'),
            meta: { title: 'jsonEditor', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
    ]
}

export default componentsRouter