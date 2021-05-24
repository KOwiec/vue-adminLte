import Layout from '@/layout'
const nestedRouter = {
    path: '/nested',
    name: 'Nested',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'Nested Routes', bodyClass: 'sidebar-mini layout-fixed',  icon: 'fas fa-ethernet' },
    children: [
        {
            path: 'menu1',
            component: () => import('@/views/nested/menu1/index'),  //component: () =>import('@/views/examples/Blank') ,
            name: 'Menu1',
            meta: { title: 'Menu 1' , icon: 'far fa-circle', iconActive: 'far fa-dot-circle'}
        },
        {
            path: '/nested/menu2',
            component: () => import('@/views/examples/Blank'), //component: () => import('@/views/nested/menu2/index'),
            name: 'Menu2',
            redirect: 'noRedirect',
            meta: { title: 'Menu 2', icon: 'far fa-hand-point-right'},
            children: [
                {
                    path: 'menu2-1',
                    component: () => import('@/views/examples/Blank'),  //component: () => import('@/views/nested/menu2/menu2-1'),
                    name: 'Menu2-1',
                    meta: { title: 'Menu 2-1', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
                },
                {
                    path: '/nested/menu2/menu2-2',
                    component: () => import('@/views/examples/Blank'),  //component: () => import('@/views/nested/menu2/menu2-2'),
                    redirect: 'noRedirect',
                    name: 'Menu2-2',
                    meta: { title: 'Menu 2-2' , icon: 'far fa-hand-point-right'},
                    children: [
                        {
                            path: 'menu2-2-1',
                            component: () => import('@/views/examples/Blank'),  //component: () => import('@/views/nested/menu2/menu2-2/menu2-2-1'),
                            name: 'Menu2-2-1',
                            meta: { title: 'Menu 2-2-1' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                        },
                        {
                            path: 'menu2-2-2',
                            component: () => import('@/views/examples/Blank'),  //component: () => import('@/views/nested/menu2/menu2-2/menu2-2-2'),
                            name: 'Menu2-2-2',
                            meta: { title: 'Menu 2-2-2' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                        },
                        {
                            path: 'menu2-2-3',
                            component: () => import('@/views/examples/Blank'),//component: () => import('@/views/nested/menu2/menu2-2/menu2-2-2'),
                            name: 'Menu2-2-3',
                            meta: { title: 'Menu 2-2-3' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                        }
                    ]
                },
                {
                    path: 'menu2-3',
                    component: () => import('@/views/examples/Blank'),//component: () => import('@/views/nested/menu2/menu2-3'),
                    name: 'Menu2-3',
                    meta: { title: 'Menu 2-3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
                }
            ]
        },
        {
            path: 'menu3',
            component: () => import('@/views/examples/Blank'), //component: () => import('@/views/nested/menu3/index'),
            name: 'Menu3',
            meta: { title: 'Menu 3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
        }
    ]
}

export default nestedRouter