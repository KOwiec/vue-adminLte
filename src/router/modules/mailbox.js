import Layout from '@/layout'
const mailboxRouter = {
    path: '/mailbox',
    name: 'Mailbox',
    redirect: 'noRedirect',
    component: Layout,
    meta: { title: 'Mailbox', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-envelope' },
    children: [
        {
            path: 'inbox',
            name: 'Inbox',
            component: () => import('@/views/mailbox/Inbox'),
            meta: { title: 'Inbox', icon: 'far fa-circle' , iconActive: 'far fa-dot-circle'}
        },
        {
            path: 'compose',
            name: 'Compose',
            component: () => import('@/views/mailbox/Compose'),
            meta: { title: 'Compose', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        },
        {
            path: 'read-mail',
            name: 'ReadMail',
            component: () => import('@/views/mailbox/Read'),
            meta: { title: 'Read', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
        }
    ]
}

export default mailboxRouter