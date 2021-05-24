import Layout from '@/layout'
const pagesRouter = {
    path: '/pages',
    name: 'Pages',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: 'Pages', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-book' },
    children: [
        /**
         *   overwrite parent classes by adding ! at the beginning of the class
         **/
        {
            path: 'invoice',
            name: 'Invoice',
            component: () => import('@/views/pages/invoice'),
            meta: { title: 'Invoice', bodyClass: '!sidebar-collapse layout-top-nav layout-fixed', icon: 'far fa-circle text-danger', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'project',
            name: 'Project',
            component: () => import('@/views/pages/Project'),
            meta: { title: 'Project', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
    ]
}

export default pagesRouter