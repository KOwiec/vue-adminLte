import Layout from '@/layout'
const chartsRouter = {
    path: '/charts',
    name: 'Charts',
    redirect: '/charts/chartjs',
    component: Layout,
    meta: { title: 'charts', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-chart-pie', makeCollections: true },
    children: [
        {
            path: 'chartjs',
            name: 'Chartjs',
            component: () => import('@/views/charts/Chartjs'),
            meta: { title: 'chartJS', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'chartjs-2',
            name: 'Chartjs2',
            component: () => import('@/views/charts/Chartjs2'),
            meta: { title: 'chartJS10', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'flot',
            name: 'Flot',
            component: () => import('@/views/charts/Flot'),
            meta: { title: 'flot', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'inline',
            name: 'Inline',
            component: () => import('@/views/charts/Inline'),
            meta: { title: 'inline', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'chartjs-vue',
            name: 'ChartjsVue',
            component: () => import('@/views/charts/ChartjsComp'),
            meta: { title: 'chartVue', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },

    ]
}

export default chartsRouter