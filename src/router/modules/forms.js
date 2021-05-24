import Layout from '@/layout'
const formsRouter = {
    path: '/forms',
    name: 'Forms',
    redirect: '/forms/general-forms',
    component: Layout,
    meta: {  title: 'Forms', bodyClass: 'sidebar-mini layout-fixed', icon: 'fa fa-edit' },
    children: [
        {
            path: 'general-forms',
            name: 'GeneralForms',
            component: () => import('@/views/forms/General'),
            meta: { title: 'General Elements', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
        },
        {
            path: 'advance-elements',
            name: 'AdvanceElements',
            component: () => import('@/views/forms/Advance'),
            meta: { title: 'Advanced Elements', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'editors',
            name: 'Editors',
            component: () => import('@/views/forms/Editors'),
            meta: { title: 'Editors', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        }
    ]
}

export default formsRouter