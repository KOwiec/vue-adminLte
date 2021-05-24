
export const constantRoutes = [
    {
      path: '/redirect',
      component: 'layout/Layout',
      hidden: true,
      children: [
        {
          path: '/redirect/:path*',
          component: 'views/redirect/index'
        }
      ]
    },
    {
      path: '/login',
      component: 'views/Auth/login',
      hidden: true
    },
    {
       path: '/register',
       component: 'views/Auth/register',
       hidden: true
    },
    {
      path: '/auth-redirect',
      component: 'views/Auth/auth-redirect',
      hidden: true
    },
    {
      path: '/404',
      component: 'views/errorPages/404',
      hidden: true
    },
    {
      path: '/401',
      component: 'views/errorPages/401',
      hidden: true
    },
    {
      path: '/pdf/download',
      component: () => '@/views/pdf/download',
      hidden: true
    },
    {
        path: '/',
        component: 'layout/Layout',
        redirect: '/widgets',
        name: 'widgets',
        meta: { bodyClass: 'sidebar-mini layout-fixed'},
        children: [
            {
                path: 'widgets',
                component: 'views/widgets/Widgets',
                name: 'Widgets',
                meta: { title: 'Widgets', icon: 'fa fa-th', topBtn: true, badge: {type: 'String', data: 'new'} }
            }
        ]
    },
    {
        path: '/profile',
        component:  'layout/Layout',
        redirect: '/profile/index',
        meta: { bodyClass: 'sidebar-mini layout-fixed'},
        hidden: true,
        children: [
            {
                path: 'index',
                name: 'Profile',
                component: 'views/profile/index',
                meta: { title: 'Profile', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            }
        ]
    },
    {
        path: '/calendar',
        component: 'layout/Layout',
        redirect: '/calendar/index',
        name: 'calendar',
        meta: { bodyClass: 'sidebar-mini layout-fixed' },
        hidden: true,
        children: [
            {
                path: 'index',
                component: 'views/calendar/Calendar',
                name: 'Calendar',
                meta: {
                    title: 'Calendar',
                    icon: 'fas fa-calendar-alt',
                    badge: { type: 'Number', data: 2 }
                }
            }
        ]
    },
    {
        path: '/dashboards',
        redirect: '/dashboards/dashboard-v1',
        name: 'dashboards',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed',  title: 'Dashboards', icon: 'fas fa-tachometer-alt' },
        children: [
            {
                path: 'dashboard-v1',
                name: 'DashboardV1',
                component: 'views/dashboard/Index',
                meta: { title: 'Dashboard v.1', bodyClass: 'layout-navbar-fixed ',  icon: 'far fa-circle',
                    iconActive: 'far fa-dot-circle', topBtn: true }
            },
            {
                path: 'dashboard-v2',
                name: 'DashboardV2',
                component: 'views/dashboard/Index2',
                meta: { title: 'Dashboard v.2', bodyClass: 'layout-navbar-fixed layout-footer-fixed',
                    icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
            },
            {
                path: 'dashboard-v3',
                name: 'DashboardV3',
                component: 'views/dashboard/Index3',
                meta: { title: 'Dashboard v.3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },

]

export const asyncRoutes = [
    {
        path: '/permission',
        component: 'layout/Layout',
        redirect: 'noRedirect',
        alwaysShow: true,
        name: 'Permission',
        meta: {
            bodyClass: 'sidebar-mini layout-fixed',
            title: 'Permission',
            icon: 'fas fa-lock',
            roles: ['admin']
        },
        children: [
            {
                path: 'page',
                component: 'views/permission/page',
                name: 'PagePermission',
                meta: { title: 'Page Permission', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', roles: ['admin'] }
            },
            {
                path: 'role',
                component: 'views/permission/role',
                name: 'RolePermission',
                meta: { title: 'Role Permission', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', roles: ['admin'] }
            },
        ]
    },
    {
        path: '/layouts',
        name: 'Layouts',
        component: 'layout/Layout',
        redirect: 'noRedirect',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'Layout Options', icon: 'fas fa-copy' },
        children: [
            {
                path: 'top-nav',
                name: 'TopNav',
                component: 'views/layouts/TopNavigation',
                meta: { bodyClass: '!sidebar-collapse layout-top-nav layout-fixed', icon: 'far fa-circle text-danger', title: 'Top Navigation' }
            },
            {
                path: 'boxed',
                name: 'Boxed',
                component: '@/views/layouts/Boxed',
                meta: { bodyClass: ' layout-boxed', icon: 'far fa-circle text-info', title: 'Boxed' }
            },
            {
                path: 'fixed',
                name: 'Fixed',
                component: 'views/layouts/Fixed',
                meta: {  icon: 'far fa-circle text-info', title: 'Fixed Sidebar' }
            },
            {
                path: 'fixed-navbar',
                name: 'FixedNavbar',
                component: 'views/layouts/FixedNavbar',
                meta: { bodyClass: 'layout-navbar-fixed', icon: 'far fa-circle text-info', title: 'Fixed Navbar' }
            },
            {
                path: 'fixed-footer',
                name: 'FixedFooter',
                component: 'views/layouts/FixedFooter',
                meta: { bodyClass: 'layout-footer-fixed', icon: 'far fa-circle text-info', title: 'Fixed Footer' }
            },
            {
                path: 'collapsed-sidebar',
                name: 'CollapsedSidebar',
                component: 'views/layouts/CollapsedSidebar',
                meta: { bodyClass: 'sidebar-collapse', icon: 'far fa-circle text-info', title: 'Collapsed Sidebar' }
            },

        ]
    },
    {
        path: '/charts',
        name: 'Charts',
        redirect: '/charts/chartjs',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'Charts', icon: 'fa fa-pie-chart', makeCollections: true },
        children: [
            {
                path: 'chartjs',
                name: 'Chartjs',
                component: 'views/charts/Chartjs',
                meta: { title: 'ChartJS', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'chartjs-2',
                name: 'Chartjs2',
                component: 'views/charts/Chartjs2',
                meta: { title: 'ChartJS 10 examples', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'flot',
                name: 'Flot',
                component: 'views/charts/Flot',
                meta: { title: 'Flot', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'inline',
                name: 'Inline',
                component: 'views/charts/Inline',
                meta: { title: 'Inline', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'chartjs-comp',
                name: 'ChartjsVue',
                component: 'views/charts/ChartjsComp',
                meta: { title: 'ChartJS Vue', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },

        ]
    },
    {
        path: '/elements',
        name: 'Elements',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'UI Elements', icon: 'fa fa-tree',
            badge: { type: 'Number', data: 6 }},
        children: [
            {
                path: 'general',
                name: 'GeneralUi',
                component: 'views/elements/General',
                meta: { title: 'General', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
            },
            {
                path: 'icons',
                name: 'Icons',
                component: 'views/elements/Icons/index.vue',
                meta: { title: 'Icons', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'buttons',
                name: 'Buttons',
                component: 'views/elements/Buttons/index.vue',
                meta: { title: 'Buttons', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'sliders',
                name: 'Sliders',
                component: 'views/elements/Sliders',
                meta: { title: 'Sliders', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'timeline',
                name: 'Timeline',
                component: 'views/elements/Timeline',
                meta: { title: 'Timeline', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'modals',
                name: 'Modals',
                component: 'views/elements/Modals',
                meta: { title: 'Modals & Alerts', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'tabs',
                name: 'Tabs',
                component: '/views/elements/Tabs',
                meta: { title: 'Tabs', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/forms',
        name: 'Forms',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'Forms', icon: 'fa fa-edit' },
        children: [
            {
                path: 'general',
                name: 'GeneralForms',
                component: 'views/forms/General',
                meta: { title: 'General Elements', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'advance',
                name: 'AdvanceElements',
                component: 'views/forms/Advance',
                meta: { title: 'Advanced Elements', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'editors',
                name: 'Editors',
                component: 'views/forms/Editors',
                meta: { title: 'Editors', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            }
        ]
    },
    {
        path: '/tables',
        name: 'Tables',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta:{ bodyClass: 'sidebar-mini layout-fixed', title: 'Tables', icon: 'fa fa-table' },
        children: [
            {
                path: 'simple-table',
                name: 'SimpleTable',
                component: 'views/tables/Simple',
                meta: { title: 'Simple Tables', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'data-table',
                name: 'DataTable',
                component: 'views/tables/Data',
                meta: { title: 'Data Tables', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'jsgrid-table',
                name: 'JsGrid',
                component: 'views/tables/jsgrid',
                meta: { title: 'jsGrid', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/header/examples',
        meta: { title: 'EXAMPLES' }
    },
    {
        path: '/mailbox',
        name: 'Mailbox',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'Mailbox', icon: 'fas fa-envelope' },
        children: [
            {
                path: 'inbox',
                name: 'Inbox',
                component: 'views/mailbox/Inbox',
                meta: { title: 'Inbox', icon: 'far fa-circle' , iconActive: 'far fa-dot-circle'}
            },
            {
                path: 'compose',
                name: 'Compose',
                component: 'views/mailbox/Compose',
                meta: { title: 'Compose', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'read',
                name: 'ReadMail',
                component: 'views/mailbox/Read',
                meta: { title: 'Read', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            }
        ]
    },
    {
        path: '/pages',
        name: 'Pages',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'Pages', icon: 'fas fa-book' },
        children: [
            {
                path: 'invoice',
                name: 'Invoice',
                component: 'views/pages/Invoice',
                meta: { bodyClass: '!sidebar-collapse layout-top-nav layout-fixed', title: 'Invoice', icon: 'far fa-circle text-danger', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'project',
                name: 'Project',
                component: () => 'views/pages/Project',
                meta: { title: 'Project', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/extras',
        name: 'Extras',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'Extras', icon: 'fas fa-plus-square' },
        children: [
            {
                path: 'login',
                name: 'Login',
                component: 'views/examples/Login',
                meta: { title: 'Login', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'register',
                name: 'Register',
                component: 'views/examples/Register',
                meta: { title: 'Register', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'forgot-password',
                name: 'ForgotPassword',
                component: 'views/examples/forgot-password',
                meta: { title: 'Forgot Password', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'recover-password',
                name: 'RecoverPassword',
                component: 'views/examples/recover-password',
                meta: {  title: 'Recover Password', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'lockscreen',
                name: 'Lockscreen',
                component: 'views/examples/Lockscreen',
                meta: { title: 'Lockscreen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'pace',
                name: 'Pace',
                component: 'views/examples/Pace',
                meta: {  title: 'Pace', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: '404',
                name: 'Error404',
                component: 'views/examples/error404',
                meta: { title: 'Error 404', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: '500',
                name: 'Error500',
                component: 'views/examples/error500',
                meta: { title: 'Error 500', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'blank',
                name: 'Blank',
                component: 'views/examples/Blank',
                meta: { title: 'Blank Page', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'starter',
                name: 'Starter',
                component: 'views/examples/StartPage',
                meta: { title: 'Starter Page', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },


        ]
    },
    {
        path: '/components',
        name: 'Components',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'Components', icon: 'fas fa-puzzle-piece' },
        children: [
            {
                path: 'sticky',
                name: 'Sticky',
                component: 'views/components/Sticky',
                meta: { title: 'Sticky', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
            },
            {
                path: 'sticky2navBar',
                name: 'StickyNavbar',
                component: 'views/components/Sticky',
                meta: { title: 'Sticky to NavBar', bodyClass: 'layout-navbar-fixed', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'sticky2screen',
                name: 'StickyScreen',
                component: 'views/components/Sticky',
                meta: { title: 'Sticky to screen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'error-logs',
                name: 'ErrorLogs',
                component: () => '/views/components/errorLog/index.vue',
                meta: { title: 'Error Logs', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'json-editor',
                name: 'JsonEditor',
                component: () => '/views/components/json-editor/index.vue',
                meta: { title: 'JSON Editor', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/api',
        name: 'Api',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta:{ bodyClass: 'sidebar-mini layout-fixed', title: 'API', icon: 'fab fa-adn' },
        children: [
            {
                path: 'api-example',
                name: 'ApiExample1',
                component: 'views/Api/APIExample1',
                meta: { title: 'API Example 1', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'api-example-2',
                name: 'ApiExample2',
                component: 'views/Api/APIExample2',
                meta: { title: 'API Example 2', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'api-proxy',
                name: 'ApiProxy',
                component: 'views/Api/APIProxy',
                meta: { title: 'API Proxy', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/header/misc',
        meta: { title: 'MISCELLANEOUS' }
    },
    {
        path: '/external-link/admin-lte',
        children: [
            {
                path: 'https://github.com/ColorlibHQ/AdminLTE/releases',
                meta: { title: 'Github Repository', icon: 'far fa-star' }
            }
        ]
    },
    {
        path: '/external-link',
        name: 'Links',
        component: 'layout/Layout',
        redirect: 'noRedirect',
        meta: {bodyClass: 'sidebar-mini', title: 'Dependencies', icon: 'nav-icon fas fa-handshake' },
        children: [
            {
                path: 'https://vuejs.org/v2/api/',
                meta: { title: 'Vue Api', icon: 'fab fa-vuejs' }
            },
            {
                path: 'https://adminlte.io/docs/3.0/index.html',
                meta: { title: 'AdminLTE Docs', icon: 'fa fa-file' }
            },
            {
                path: 'https://element.eleme.io/#/en-US/component/installation',
                meta: { title: ' Element UI', icon: 'fab fa-etsy' }
            },
            {
                path: 'https://miragejs.com/tutorial/intro/',
                meta: { title: 'Mirage', icon: 'fas fa-mountain' }
            },
            {
                path: 'https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html',
                meta: { title: 'router & nav', icon: 'fab fa-vimeo-v'}
            },
            {
                path: 'https://jasonwatmore.com/post/2018/07/14/vue-vuex-user-registration-and-login-tutorial-example',
                meta: { title: 'login & register', icon: 'fas fa-registered'}
            },
            {
                path: 'https://fusejs.io/examples.html#extended-searc',
                meta: { title: 'Search - examples', icon: 'fas fa-search'}
            },
        ]
    },
    {
        path: '/nested',
        name: 'Nested',
        component: 'layout/Layout',
        redirect: 'noRedirect',
        meta: { title: 'Nested Routes', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-ethernet' },
        children: [
            {
                path: 'menu1',
                component: 'views/nested/menu1/index',
                meta: { title: 'Menu 1 ' , icon: 'far fa-circle', iconActive: 'far fa-dot-circle'}
            },
            {
                path: '/nested/menu2',
                component: 'views/examples/Blank',
                redirect: 'noRedirect',
                meta: { title: 'Menu 2', icon: 'far fa-hand-point-right'},
                children: [
                    {
                        path: 'menu2-1',
                        component: 'views/examples/Blank',
                        name: 'Menu2-1',
                        meta: { title: 'Menu 2-1', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
                    },
                    {
                        path: '/nested/menu2/menu2-2',
                        component: 'views/examples/Blank',
                        redirect: 'noRedirect',
                        name: 'Menu2-2',
                        meta: { title: 'Menu 2-2' , icon: 'far fa-hand-point-right'},
                        children: [
                            {
                                path: 'menu2-2-1',
                                component: 'views/examples/Blank',
                                name: 'Menu2-2-1',
                                meta: { title: 'Menu 2-2-1' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                            },
                            {
                                path: 'menu2-2-2',
                                component: 'views/examples/Blank',
                                name: 'Menu2-2-2',
                                meta: { title: 'Menu 2-2-2' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                            },
                            {
                                path: 'menu2-2-3',
                                component: 'views/examples/Blank',
                                name: 'Menu2-2-3',
                                meta: { title: 'Menu 2-2-3' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                            }
                        ]
                    },
                    {
                        path: 'menu2-3',
                        component: 'views/examples/Blank',
                        name: 'Menu2-3',
                        meta: { title: 'Menu 2-3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
                    }
                ]
            },
            {
                path: 'menu3',
                component: 'views/examples/Blank',
                name: 'Menu3',
                meta: { title: 'Menu 3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
            }
        ]
    },
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

    { path: '*', redirect: '/404', hidden: true }
]
