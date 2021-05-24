import { deepClone } from '@/utils/document'
import { asyncRoutes, constantRoutes } from './routes.js'

export const routes = deepClone([...constantRoutes, ...asyncRoutes])

export const roles = [
    {
        key: 'admin',
        name: 'admin',
        description: 'Super Administrator. Have access to view all pages.',
        routes: routes
    },
    {
        key: 'user',
        name: 'user',
        description: 'Normal User. Can see all pages except permission page',
        routes: routes.filter(i => i.path !== '/permission')
    },
    {
        key: 'visitor',
        name: 'visitor',
        description: 'Visitor. Can only see the home page',
        routes: [
            {
                path: '/',
                redirect: '/widgets',
                name: 'widgets',
                meta: { bodyClass: 'sidebar-mini layout-fixed'},
                children: [
                    {
                        path: 'widgets',
                        component: 'views/widgets/Widgets',
                        name: 'widgets1',
                        meta: {
                            title: 'Widgets',
                            icon: 'fa fa-th',
                            topBtn: true,
                            badge: {type: 'String', data: 'new'}
                        }
                    }
                ]
            }
        ]
    }
];

