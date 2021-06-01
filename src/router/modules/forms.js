import Layout from '@/layout'
const formsRouter = {
    path: '/forms',
    name: 'Forms',
    redirect: '/forms/general-forms',
    component: Layout,
    meta: {  title: 'forms', bodyClass: 'sidebar-mini layout-fixed', icon: 'fa fa-edit' },
    children: [
        {
            path: 'general-forms',
            name: 'GeneralForms',
            component: () => import('@/views/forms/General'),
            meta: { title: 'generalForms', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
        },
        {
            path: 'advance-elements',
            name: 'AdvanceElements',
            component: () => import('@/views/forms/Advance'),
            meta: { title: 'advancedElements', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'editors',
            name: 'Editors',
            component: () => import('@/views/forms/Editors'),
            meta: { title: 'editors', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        }
    ]
}

export default formsRouter