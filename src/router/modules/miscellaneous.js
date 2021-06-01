import Layout from '@/layout'
const miscRouter = {
    path: '/external-link',
    name: 'Links',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'dependencies', bodyClass: 'sidebar-mini', icon: 'nav-icon fas fa-handshake' },
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
}

export default miscRouter