import Layout from '@/layout'
const tablesRouter = {
    path: '/tables',
    name: 'Tables',
    redirect: '/tables/simple-table',
    component: Layout,
    meta:{ title: 'Tables', bodyClass: 'sidebar-mini layout-fixed', icon: 'fa fa-table' },
    children: [
        {
            path: 'simple-table',
            name: 'SimpleTable',
            component: () => import('@/views/tables/Simple'),
            meta: { title: 'Simple Tables', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'data-table',
            name: 'DataTable',
            component: () => import('@/views/tables/Data'),
            meta: { title: 'Data Tables', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'jsgrid-table',
            name: 'JsGrid',
            component: () => import('@/views/tables/jsgrid'),
            meta: { title: 'jsGrid', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
    ]
}

export default tablesRouter
