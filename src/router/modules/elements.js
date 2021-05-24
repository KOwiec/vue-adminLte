import Layout from '@/layout'
const elementsRouter = {
    path: '/elements',
    name: 'Elements',
    redirect: '/elements/general-ui',
    component: Layout,
    meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'UI Elements', icon: 'fa fa-tree',
            badge: { type: 'Number', data: 7 }},
    children: [
        {
            path: 'general-ui',
            name: 'GeneralUi',
            component: () => import('@/views/elements/General'),
            meta: { title: 'General', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
        },
        {
            path: 'icons',
            name: 'Icons',
            component: () => import('@/views/elements/Icons/index.vue'),
            meta: { title: 'Icons', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'buttons',
            name: 'Buttons',
            component: () => import('@/views/elements/Buttons/index.vue'),
            meta: { title: 'Buttons', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'sliders',
            name: 'Sliders',
            component: () => import('@/views/elements/Sliders'),
            meta: { title: 'Sliders', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'timeline',
            name: 'Timeline',
            component: () => import('@/views/elements/Timeline'),
            meta: { title: 'Timeline', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'modals',
            name: 'Modals',
            component: () => import('@/views/elements/Modals'),
            meta: { title: 'Modals & Alerts', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'tabs',
            name: 'Tabs',
            component: () => import('@/views/elements/Tabs'),
            meta: { title: 'Tabs', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
    ]
}

export default elementsRouter