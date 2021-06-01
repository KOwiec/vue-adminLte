import Layout from '@/layout'

const dashboardsRouter = {
    path: '/dashboards',
    redirect: '/dashboards/dashboard-v1',
    name: 'Dashboards',
    component: Layout,
    meta: { title: 'dashboards', bodyClass: 'sidebar-mini layout-fixed',  icon: 'fas fa-tachometer-alt' },
    children: [
        {
            path: 'dashboard-v1',
            name: 'DashboardV1',
            component: () => import('@/views/dashboard/Index'),
            meta: { title: 'dashboardV1', bodyClass: 'layout-navbar-fixed ', icon: 'far fa-circle',
                    iconActive: 'far fa-dot-circle', topBtn: true }
        },
        {
            path: 'dashboard-v2',
            name: 'DashboardV2',
            component: () => import('@/views/dashboard/Index2'),
            meta: { title: 'dashboardsV2', bodyClass: 'layout-navbar-fixed layout-footer-fixed',
                    icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
        },
        {
            path: 'dashboard-v3',
            name: 'DashboardV3',
            component: () => import('@/views/dashboard/Index3'),
            meta: { title: 'dashboardsV3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
    ]
}

export default dashboardsRouter


