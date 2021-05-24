import Layout from '@/layout'
const extrasRouter = {
    path: '/extras',
    name: 'Extras',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: 'Extras', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-plus-square' },
    children: [
        {
            path: 'login',
            name: 'Login',
            component: () => import('@/views/examples/Login'),
            meta: { title: 'Login', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'register',
            name: 'Register',
            component: () => import('@/views/examples/Register'),
            meta: { title: 'Register', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'forgot-password',
            name: 'ForgotPassword',
            component: () => import('@/views/examples/forgot-password'),
            meta: { title: 'Forgot Password', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'recover-password',
            name: 'RecoverPassword',
            component: () => import('@/views/examples/recover-password'),
            meta: {  title: 'Recover Password', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'lockscreen',
            name: 'Lockscreen',
            component: () => import('@/views/examples/Lockscreen'),
            meta: { title: 'Lockscreen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'pace',
            name: 'Pace',
            component: () => import('@/views/examples/Pace'),
            meta: {  title: 'Pace', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: '404',
            name: 'Error404',
            component: () => import('@/views/examples/error404'),
            meta: { title: 'Error 404', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: '500',
            name: 'Error500',
            component: () => import('@/views/examples/error500'),
            meta: { title: 'Error 500', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'blank',
            name: 'Blank',
            component: () => import('@/views/examples/Blank'),
            meta: { title: 'Blank Page', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'starter',
            name: 'Starter',
            component: () => import('@/views/examples/StartPage'),
            meta: { title: 'Start Page', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },


    ]
}

export default extrasRouter