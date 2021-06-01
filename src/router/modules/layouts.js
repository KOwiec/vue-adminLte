import Layout from '@/layout'

const layoutsRouter = {
    path: '/layouts',
    name: 'Layouts',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'layoutOpts', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-copy' },
    children: [
    /**
    *   overwrite parent classes by adding ! at the beginning of the class
    **/
        {
            path: 'top-nav',
            name: 'TopNav',
            component: () => import('@/views/layouts/TopNavigation'),
            meta: { title: 'topNav', bodyClass: '!sidebar-collapse layout-top-nav layout-fixed', icon: 'far fa-circle text-danger' }
        },
        {
            path: 'boxed',
            name: 'Boxed',
            component: () => import('@/views/layouts/Boxed'),
            meta: {  title: 'boxed', bodyClass: ' layout-boxed', icon: 'far fa-circle text-info' }
        },
        {
            path: 'fixed',
            name: 'Fixed',
            component: () => import('@/views/layouts/Fixed'),
            meta: {  title: 'fixedSidebar', icon: 'far fa-circle text-info' }
        },
        {
            path: 'fixed-navbar',
            name: 'FixedNavbar',
            component: () => import('@/views/layouts/FixedNavbar'),
            meta: { title: 'fixedNavbar', bodyClass: 'layout-navbar-fixed', icon: 'far fa-circle text-info' }
        },
        {
            path: 'fixed-footer',
            name: 'FixedFooter',
            component: () => import('@/views/layouts/FixedFooter'),
            meta: { title: 'fixedFooter', bodyClass: 'layout-footer-fixed', icon: 'far fa-circle text-info' }
        },
        {
            path: 'collapsed-sidebar',
            name: 'CollapsedSidebar',
            component: () => import('@/views/layouts/CollapsedSidebar'),
            meta: { title: 'collapsedSidebar', bodyClass: 'sidebar-collapse', icon: 'far fa-circle text-info' }
        },

    ]
}

export default layoutsRouter