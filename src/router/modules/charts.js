import Layout from '@/layout'
const chartsRouter = {
    path: '/charts',
    name: 'Charts',
    redirect: '/charts/chartjs',
    component: Layout,
    meta: { title: 'Charts', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-chart-pie', makeCollections: true },
    children: [
        {
            path: 'chartjs',
            name: 'Chartjs',
            component: () => import('@/views/charts/Chartjs'),
            meta: { title: 'ChartJS', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'chartjs-2',
            name: 'Chartjs2',
            component: () => import('@/views/charts/Chartjs2'),
            meta: { title: 'ChartJS 10 examples', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'flot',
            name: 'Flot',
            component: () => import('@/views/charts/Flot'),
            meta: { title: 'Flot', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'inline',
            name: 'Inline',
            component: () => import('@/views/charts/Inline'),
            meta: { title: 'Inline', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'chartjs-vue',
            name: 'ChartjsVue',
            component: () => import('@/views/charts/ChartjsComp'),
            meta: { title: 'ChartJS Vue', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },

    ]
}

export default chartsRouter