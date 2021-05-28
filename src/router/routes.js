/* Layout */
import Layout from '@/layout'
/* Router Modules */
import dashboardsRouter from './modules/dashboards'
import layoutsRouter from './modules/layouts'
import chartsRouter from './modules/charts'
import elementsRouter from './modules/elements'
import tablesRouter from './modules/tables'
import formsRouter from './modules/forms'
import mailboxRouter from './modules/mailbox'
import apiRouter from "./modules/api"
import pagesRouter from "./modules/pages"
import extrasRouter from "./modules/extras"
import nestedRouter from "./modules/nested"
import miscRouter from "./modules/miscellaneous"
import componentsRouter from "./modules/components";

 /** note: sub-menu only appear when children.length>=1
 *  base on  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *  see also: BACKEND-fake/mirage/data/roles/routes.js
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the menu-sidebar (default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if `redirect:noRedirect` will no redirect in the breadcrumb
 * meta : {
 *  bodyClass:                   add class to body tag to manage the layout in admilte.js template
 *  roles: ['admin','user']      control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'name'                 the icon show in the sidebar
    iconActive:                  the icon show in the sidebar in active state
    topBtn: false                the button to the top in the long page ( default false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    makeCollections: false       if false, the submenu not save collections settings for components, colors, layout and customize content (default is false)
                                 for this template it's set true for charts menu
    activeMenu:                  if set path, the sidebar will highlight the path you set - (not implemented -todo)
  }
 **/

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/Auth/login'),
        hidden: true
    },
    {
        path: '/register',
        component: () => import('@/views/Auth/register'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () => import('@/views/Auth/components/auth-redirect'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/errorPages/401'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/errorPages/404'),
        hidden: true
    },
    {
        path: '/pdf/download',
        component: () => import('@/views/pdf/download'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: 'widgets',
        meta: { bodyClass: 'sidebar-mini layout-fixed'},
        children: [
            {
                path: 'widgets',
                component: () => import('@/views/widgets/Widgets'),
                name: 'Widgets',
                meta: { title: 'Widgets', icon: 'fa fa-th', topBtn: true,  badge: { type: 'String', data: 'new' } }
            }
        ]
    },
    {
        /** available from navbar (profile component)**/
        path: '/profile',
        component: Layout,
        hidden: true,
        redirect: '/profile/index',
        meta: { bodyClass: 'sidebar-mini layout-fixed'},
        children: [
            {
                path: 'index',
                name: 'Profile',
                component: () => import('@/views/profile/index'),
                meta: { title: 'Profile', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        /** available from sidebar footer button**/
        path: '/calendar',
        component: Layout,
        hidden: true,
        redirect: '/calendar/index',
        meta: { bodyClass: 'sidebar-mini layout-fixed' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/calendar/Calendar'),
                name: 'Calendar',
                meta: { title: 'Calendar', icon: 'fas fa-calendar-alt',  badge: { type: 'Number', data: 2 } }
            }
        ]
    },
    /** when your routing map is too long, you can split it into small modules **/
    dashboardsRouter,
    layoutsRouter,
    chartsRouter,
    elementsRouter,
    formsRouter,
    tablesRouter,
    {
        path: '/header/examples',
        meta: { title: 'EXAMPLES' }
    },

    mailboxRouter,
    pagesRouter,
    extrasRouter,
    componentsRouter,
    apiRouter,

    {
        path: '/header/misc',
        meta: { title: 'MISCELLANEOUS' }
    },
    {
        path: '/external-link/admin-lte',
        component: Layout,
        children: [
            {
                path: 'https://github.com/KOwiec/vue-adminLte/releases',
                meta: { title: 'Github Repository', icon: 'far fa-star' }
            }
        ]
    },
    miscRouter,
    {
        path: '/header/multi',
        meta: { title: 'MULTI LEVEL EXAMPLE' }
    },
    nestedRouter,
    {
        path: '/header/labels',
        meta: { title: 'LABELS' }
    },
    {
        path: '/label/important',
        meta: { title: 'Important', icon: 'far fa-circle text-danger'}
    },
    {
        path: '/label/warning',
        meta: { title: 'Warning', icon: 'far fa-circle text-warning'}
    },
    {
        path: '/label/info',
        meta: { title: 'Info', icon: 'far fa-circle text-info'}
    },

];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    {
        path: '/permission',
        component: Layout,
        redirect: 'noRedirect',
        alwaysShow: true, // will always show the root menu
        name: 'Permission',
        meta: {
            bodyClass: 'sidebar-mini layout-fixed',
            title: 'Permission',
            icon: 'fas fa-lock',
            roles: ['admin'] // you can set roles in root nav
            // Use  ['admin', 'user'] if wanna make one of the sub nav available for user role
        },
        children: [
            {
                path: 'page',
                component: () => import('@/views/permission/page'),
                name: 'PagePermission',
                meta: {
                    title: 'Page Permission',
                    icon: 'far fa-circle',
                    iconActive: 'far fa-dot-circle',
                    roles: ['admin']   // or you can only set roles in sub nav.

                }
            },
            {
                path: 'role',
                component: () => import('@/views/permission/role'),
                name: 'RolePermission',
                meta: {
                    title: 'Role Permission',
                    icon: 'far fa-circle',
                    iconActive: 'far fa-dot-circle',
                    roles: ['admin']
                }
            },

        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]
