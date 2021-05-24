import Layout from '@/layout'
const miscRouter = {
    path: '/external-link',
    name: 'Links',
    component: Layout,
    redirect: 'noRedirect',
    meta: { title: 'Dependencies', bodyClass: 'sidebar-mini', icon: 'nav-icon fas fa-handshake' },
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
            meta: { title: 'Element UI', icon: 'fab fa-etsy' }
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
}

export default miscRouter