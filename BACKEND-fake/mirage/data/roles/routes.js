
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
        redirect: 'widgets',
        name: 'Widgets',
        meta: { bodyClass: 'sidebar-mini layout-fixed'},
        children: [
            {
                path: 'widgets',
                component: 'views/widgets/Widgets',
                name: 'Widgets',
                meta: { title: 'widgets', icon: 'fa fa-th', topBtn: true, badge: {type: 'String', data: 'new'} }
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
                meta: { title: 'profile', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            }
        ]
    },
    {
        path: '/calendar',
        component: 'layout/Layout',
        redirect: '/calendar/index',
        meta: { bodyClass: 'sidebar-mini layout-fixed' },
        hidden: true,
        children: [
            {
                path: 'index',
                component: 'views/calendar/Calendar',
                name: 'Calendar',
                meta: {
                    title: 'calendar',
                    icon: 'fas fa-calendar-alt',
                    badge: { type: 'Number', data: 2 }
                }
            }
        ]
    },
    {
        path: '/dashboards',
        redirect: '/dashboards/dashboard-v1',
        name: 'Dashboards',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed',  title: 'dashboards', icon: 'fas fa-tachometer-alt' },
        children: [
            {
                path: 'dashboard-v1',
                name: 'DashboardV1',
                component: 'views/dashboard/Index',
                meta: { bodyClass: 'layout-navbar-fixed ', title: 'dashboardV1', icon: 'far fa-circle',
                    iconActive: 'far fa-dot-circle', topBtn: true }
            },
            {
                path: 'dashboard-v2',
                name: 'DashboardV2',
                component: 'views/dashboard/Index2',
                meta: { bodyClass: 'layout-navbar-fixed layout-footer-fixed', title: 'dashboardsV2',
                    icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
            },
            {
                path: 'dashboard-v3',
                name: 'DashboardV3',
                component: 'views/dashboard/Index3',
                meta: { title: 'dashboardsV3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
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
            title: 'permission',
            icon: 'fas fa-lock',
            roles: ['admin']
        },
        children: [
            {
                path: 'page',
                component: 'views/permission/page',
                name: 'PagePermission',
                meta: { title: 'pagePermission', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', roles: ['admin'] }
            },
            {
                path: 'role',
                component: 'views/permission/role',
                name: 'RolePermission',
                meta: { title: 'rolePermission', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', roles: ['admin'] }
            },
        ]
    },
    {
        path: '/layouts',
        name: 'Layouts',
        component: 'layout/Layout',
        redirect: 'noRedirect',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'layoutOpts', icon: 'fas fa-copy' },
        children: [
            {
                path: 'top-nav',
                name: 'TopNav',
                component: 'views/layouts/TopNavigation',
                meta: { title: 'topNav', bodyClass: '!sidebar-collapse layout-top-nav layout-fixed', icon: 'far fa-circle text-danger' }
            },
            {
                path: 'boxed',
                name: 'Boxed',
                component: '@/views/layouts/Boxed',
                meta: { title: 'boxed', bodyClass: ' layout-boxed', icon: 'far fa-circle text-info' }
            },
            {
                path: 'fixed',
                name: 'Fixed',
                component: 'views/layouts/Fixed',
                meta: { title: 'fixedSidebar' ,icon: 'far fa-circle text-info' }
            },
            {
                path: 'fixed-navbar',
                name: 'FixedNavbar',
                component: 'views/layouts/FixedNavbar',
                meta: { title: 'fixedNavbar', bodyClass: 'layout-navbar-fixed', icon: 'far fa-circle text-info' }
            },
            {
                path: 'fixed-footer',
                name: 'FixedFooter',
                component: 'views/layouts/FixedFooter',
                meta: { title: 'fixedFooter', bodyClass: 'layout-footer-fixed', icon: 'far fa-circle text-info' }
            },
            {
                path: 'collapsed-sidebar',
                name: 'CollapsedSidebar',
                component: 'views/layouts/CollapsedSidebar',
                meta: { title: 'collapsedSidebar', bodyClass: 'sidebar-collapse', icon: 'far fa-circle text-info' }
            },

        ]
    },
    {
        path: '/charts',
        name: 'Charts',
        redirect: '/charts/chartjs',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'charts', icon: 'fa fa-pie-chart', makeCollections: true },
        children: [
            {
                path: 'chartjs',
                name: 'Chartjs',
                component: 'views/charts/Chartjs',
                meta: { title: 'chartJS', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'chartjs-2',
                name: 'Chartjs2',
                component: 'views/charts/Chartjs2',
                meta: { title: 'chartJS10', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'flot',
                name: 'Flot',
                component: 'views/charts/Flot',
                meta: { title: 'flot', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'inline',
                name: 'Inline',
                component: 'views/charts/Inline',
                meta: { title: 'inline', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'chartjs-vue',
                name: 'ChartjsVue',
                component: 'views/charts/ChartjsComp',
                meta: { title: 'chartVue', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },

        ]
    },
    {
        path: '/elements',
        name: 'Elements',
        redirect: '/elements/general-ui',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'elements', icon: 'fa fa-tree',
            badge: { type: 'Number', data: 6 }},
        children: [
            {
                path: 'general-ui',
                name: 'GeneralUi',
                component: 'views/elements/General',
                meta: { title: 'general', icon: 'far fa-circle', iconActive: 'far fa-dot-circle', topBtn: true }
            },
            {
                path: 'icons',
                name: 'Icons',
                component: 'views/elements/Icons/index.vue',
                meta: { title: 'icons', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'buttons',
                name: 'Buttons',
                component: 'views/elements/Buttons/index.vue',
                meta: { title: 'buttons', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'sliders',
                name: 'Sliders',
                component: 'views/elements/Sliders',
                meta: { title: 'sliders', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'timeline',
                name: 'Timeline',
                component: 'views/elements/Timeline',
                meta: { title: 'timeline', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'modals',
                name: 'Modals',
                component: 'views/elements/Modals',
                meta: { title: 'modalAlert', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'tabs',
                name: 'Tabs',
                component: '/views/elements/Tabs',
                meta: { title: 'tabs', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/forms',
        name: 'Forms',
        redirect: '/forms/general-forms',
        component: 'layout/Layout',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'forms', icon: 'fa fa-edit' },
        children: [
            {
                path: 'general-forms',
                name: 'GeneralForms',
                component: 'views/forms/General',
                meta: { title: 'generalForms', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'advance-elements',
                name: 'AdvanceElements',
                component: 'views/forms/Advance',
                meta: { title: 'advanceElements', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'editors',
                name: 'Editors',
                component: 'views/forms/Editors',
                meta: { title: 'editors', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            }
        ]
    },
    {
        path: '/tables',
        name: 'Tables',
        redirect: '/tables/simple-table',
        component: 'layout/Layout',
        meta:{ bodyClass: 'sidebar-mini layout-fixed', title: 'tables', icon: 'fa fa-table' },
        children: [
            {
                path: 'simple-table',
                name: 'SimpleTable',
                component: 'views/tables/Simple',
                meta: { title: 'simpleTable', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'data-table',
                name: 'DataTable',
                component: 'views/tables/Data',
                meta: { title: 'dataTable', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
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
        meta: { title: 'examples' }
    },
    {
        path: '/mailbox',
        name: 'Mailbox',
        redirect: '/mailbox/inbox',
        component: 'layout/Layout',
        meta: { title: 'mailbox', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-envelope' },
        children: [
            {
                path: 'inbox',
                name: 'Inbox',
                component: 'views/mailbox/Inbox',
                meta: { title: 'inbox', icon: 'far fa-circle' , iconActive: 'far fa-dot-circle'}
            },
            {
                path: 'compose',
                name: 'Compose',
                component: 'views/mailbox/Compose',
                meta: { title: 'compose', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'read-mail',
                name: 'ReadMail',
                component: 'views/mailbox/Read',
                meta: { title: 'read', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            }
        ]
    },
    {
        path: '/pages',
        name: 'Pages',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { title: 'pages', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-book' },
        children: [
            {
                path: 'invoice',
                name: 'Invoice',
                component: 'views/pages/Invoice',
                meta: { title: 'invoice', bodyClass: '!sidebar-collapse layout-top-nav layout-fixed', icon: 'far fa-circle text-danger', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'project',
                name: 'Project',
                component: () => 'views/pages/Project',
                meta: { title: 'project', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/extras',
        name: 'Extras',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { title: 'extras', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-plus-square' },
        children: [
            {
                path: 'login',
                name: 'Login',
                component: 'views/examples/Login',
                meta: { title: 'login', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'register',
                name: 'Register',
                component: 'views/examples/Register',
                meta: { title: 'register', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'forgot-password',
                name: 'ForgotPassword',
                component: 'views/examples/forgot-password',
                meta: { title: 'forgotPass', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'recover-password',
                name: 'RecoverPassword',
                component: 'views/examples/recover-password',
                meta: {  title: 'recoverPass', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'lockscreen',
                name: 'Lckscreen',
                component: 'views/examples/Lockscreen',
                meta: { title: 'lockscreen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'pace',
                name: 'Pace',
                component: 'views/examples/Pace',
                meta: {  title: 'pace', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: '404',
                name: 'Error404',
                component: 'views/examples/error404',
                meta: { title: 'error404', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: '500',
                name: 'Error500',
                component: 'views/examples/error500',
                meta: { title: 'error500', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'blank',
                name: 'Blank',
                component: 'views/examples/Blank',
                meta: { title: 'blank', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'starter',
                name: 'Starter',
                component: 'views/examples/StartPage',
                meta: { title: 'starter', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },


        ]
    },
    {
        path: '/components',
        name: 'Components',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta: { title: 'components', bodyClass: 'sidebar-mini layout-fixed', icon: 'fas fa-puzzle-piece' },
        children: [
            {
                path: 'sticky',
                name: 'Sticky',
                component: 'views/components/Sticky',
                meta: { title: 'sticky', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
            },
            {
                path: 'sticky-navbar',
                name: 'StickyNavbar',
                component: 'views/components/Sticky',
                meta: {  title: 'stickyNav', bodyClass: 'layout-navbar-fixed', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'sticky-screen',
                name: 'StickyScreen',
                component: 'views/components/Sticky',
                meta: { title: 'stickyScreen', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'error-logs',
                name: 'ErrorLogs',
                component: 'views/components/errorLog/index.vue',
                meta: { title: 'errorLogs', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'json-editor',
                name: 'JsonEditor',
                component: 'views/components/json-editor/index.vue',
                meta: { title: 'jsonEditor', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
        ]
    },
    {
        path: '/api',
        name: 'Api',
        redirect: 'noRedirect',
        component: 'layout/Layout',
        meta:{ bodyClass: 'sidebar-mini layout-fixed', title: 'api', icon: 'fab fa-adn' },
        children: [
            {
                path: 'api-example',
                name: 'ApiExample1',
                component: 'views/examples/APIExample',
                meta: { title: 'apiExample1', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'api-example-2',
                name: 'ApiExample2',
                component: 'views/examples/APIFaker',
                meta: { title: 'apiExample2', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            },
            {
                path: 'api-proxy',
                name: 'ApiProxy',
                component: 'views/Api/APIProxy',
                meta: { title: 'apiProxy', icon: 'far fa-circle', iconActive: 'far fa-dot-circle' }
            }
        ]
    },
    {
        path: '/header/misc',
        meta: { title: 'miscellaneous' }
    },
    {
        path: '/external-link/admin-lte',
        children: [
            {
                path: 'https://github.com/ColorlibHQ/AdminLTE/releases',
                meta: { title: 'githubRepo', icon: 'far fa-star' }
            }
        ]
    },
    {
        path: '/external-link',
        name: 'Links',
        component: 'layout/Layout',
        redirect: 'noRedirect',
        meta: {bodyClass: 'sidebar-mini', title: 'dependencies', icon: 'nav-icon fas fa-handshake' },
        children: [
            {
                path: 'https://vuejs.org/v2/api/',
                meta: { title: 'vueApi', icon: 'fab fa-vuejs' }
            },
            {
                path: 'https://adminlte.io/docs/3.0/index.html',
                meta: { title: 'adminLteDocs', icon: 'fa fa-file' }
            },
            {
                path: 'https://element.eleme.io/#/en-US/component/installation',
                meta: { title: 'elementUi', icon: 'fab fa-etsy' }
            },
            {
                path: 'https://miragejs.com/tutorial/intro/',
                meta: { title: 'mirage', icon: 'fas fa-mountain' }
            },
            {
                path: 'https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html',
                meta: { title: 'routerNav', icon: 'fab fa-vimeo-v'}
            },
            {
                path: 'https://jasonwatmore.com/post/2018/07/14/vue-vuex-user-registration-and-login-tutorial-example',
                meta: { title: 'loginRegister', icon: 'fas fa-registered'}
            },
            {
                path: 'https://fusejs.io/examples.html#extended-searc',
                meta: { title: 'searchExamples', icon: 'fas fa-search'}
            },
            {
                path: 'https://kazupon.github.io/vue-i18n/',
                meta: { title: 'I18n', icon: 'fas fa-globe'}
            }
        ]
    },
    {
        path: '/header/multi',
        meta: { title: 'multiLevelExample' }
    },
    {
        path: '/nested',
        name: 'Nested',
        component: 'layout/Layout',
        redirect: 'noRedirect',
        meta: { bodyClass: 'sidebar-mini layout-fixed', title: 'nestedRoutes', icon: 'fas fa-ethernet' },
        children: [
            {
                path: 'menu1',
                component: 'views/nested/menu1/index',
                name: 'Menu1',
                meta: { title: 'menu1' , icon: 'far fa-circle', iconActive: 'far fa-dot-circle'}
            },
            {
                path: '/nested/menu2',
                component: 'views/examples/Blank',
                name: 'Menu2',
                redirect: 'noRedirect',
                meta: { title: 'menu2', icon: 'far fa-hand-point-right'},
                children: [
                    {
                        path: 'menu2-1',
                        component: 'views/examples/Blank',
                        name: 'Menu2-1',
                        meta: { title: 'menu2-1', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
                    },
                    {
                        path: '/nested/menu2/menu2-2',
                        component: 'views/examples/Blank',
                        redirect: 'noRedirect',
                        name: 'Menu2-2',
                        meta: { title: 'menu2-2' , icon: 'far fa-hand-point-right'},
                        children: [
                            {
                                path: 'menu2-2-1',
                                component: 'views/examples/Blank',
                                name: 'Menu2-2-1',
                                meta: { title: 'menu2-2-1' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                            },
                            {
                                path: 'menu2-2-2',
                                component: 'views/examples/Blank',
                                name: 'Menu2-2-2',
                                meta: { title: 'menu2-2-2' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                            },
                            {
                                path: 'menu2-2-3',
                                component: 'views/examples/Blank',
                                name: 'Menu2-2-3',
                                meta: { title: 'menu2-2-3' , icon: 'fas fa-circle', iconActive: 'far fa-dot-circle' }
                            }
                        ]
                    },
                    {
                        path: 'menu2-3',
                        component: 'views/examples/Blank',
                        name: 'Menu2-3',
                        meta: { title: 'menu2-3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
                    }
                ]
            },
            {
                path: 'menu3',
                component: 'views/examples/Blank',
                name: 'Menu3',
                meta: { title: 'menu3', icon: 'far fa-circle', iconActive: 'far fa-dot-circle'  }
            }
        ]
    },
    {
        path: '/header/labels',
        meta: { title: 'labels' }
    },
    {
        path: '/label/important',
        meta: { title: 'important', icon: 'far fa-circle text-danger'}
    },
    {
        path: '/label/warning',
        meta: { title: 'warning', icon: 'far fa-circle text-warning'}
    },
    {
        path: '/label/info',
        meta: { title: 'info', icon: 'far fa-circle text-info'}
    },

    { path: '*', redirect: '/404', hidden: true }
]
