import Layout from '@/layout'
const extrasRouter = {
    path: '/extras',
    name: 'Extras',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: 'extras', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-plus-square' },
    children: [
        {
            path: 'login',
            name: 'Login',
            component: () => import('@/views/examples/Login'),
            meta: { title: 'login', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'register',
            name: 'Register',
            component: () => import('@/views/examples/Register'),
            meta: { title: 'register', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'forgot-password',
            name: 'ForgotPassword',
            component: () => import('@/views/examples/forgot-password'),
            meta: { title: 'forgotPass', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'recover-password',
            name: 'RecoverPassword',
            component: () => import('@/views/examples/recover-password'),
            meta: {  title: 'recoverPass', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'lockscreen',
            name: 'Lockscreen',
            component: () => import('@/views/examples/Lockscreen'),
            meta: { title: 'lockscreen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'pace',
            name: 'Pace',
            component: () => import('@/views/examples/Pace'),
            meta: {  title: 'pace', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: '404',
            name: 'Error404',
            component: () => import('@/views/examples/error404'),
            meta: { title: 'error404', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: '500',
            name: 'Error500',
            component: () => import('@/views/examples/error500'),
            meta: { title: 'error500', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'blank',
            name: 'Blank',
            component: () => import('@/views/examples/Blank'),
            meta: { title: 'blank', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'starter',
            name: 'Starter',
            component: () => import('@/views/examples/StartPage'),
            meta: { title: 'starter', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },


    ]
}

export default extrasRouter