import router, { allRoutes } from '../router'
import store from '../store'

// change body class for textSmBody & accentColor before VueBodyClass (for all mata.bodyClass) see: @/router/routes.js
import { checkBodyClass } from '@/utils/document'
checkBodyClass( store );

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'  // progress bar style

import { getAuth, getToken } from '@/utils/auth'   // get token from cookie & user data
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false });    // NProgress Configuration
import Swal from 'sweetalert2'

const whiteList = ['/login',  '/register', '/auth-redirect'];   // no redirect whitelist

// add data from meta 'bodyClass' to body tag by router (see - @/router/modules/layouts.js)
import VueBodyClass from 'vue-body-class'
const Routes =  allRoutes()
const vueBodyClass = new VueBodyClass(Routes);

router.beforeEach( async( to, from, next ) => {
    // start progress bar
    NProgress.start();

    // get settings from localStorage for routes
    if ( to.path !== '/login' &&  to.path !== '/register' && store.dispatch( 'settings/isRemember' )) {
        await store.dispatch( 'storage/RetrieveStorageByRoute', to );
    }
    // vueBodyClass
    vueBodyClass.guard(to, next);

    // set page title
    document.title = getPageTitle(to.meta.title);

    // determine whether the user has logged in
    const hasToken = getToken();

    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' });
            NProgress.done()
        } else {
            // determine whether the user has obtained his permission roles through getInfo
            const hasRoles = store.getters.roles && store.getters.roles.length > 0

            if (hasRoles) {
                next()
            } else {
                try {
                    // get user info if not exist in store
                    // note: roles must be a object array! such as: ['admin'] or ,['visitor','user']
                    const { roles } = await store.dispatch('account/getInfo');

                    // generate accessible routes map based on roles
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles);

                    // dynamically add accessible routes (vue-router.commons.js)
                    router.addRoutes(accessRoutes)

                    // hack method to ensure that addRoutes is complete
                    // set the replace: true, so the navigation will not leave a history record
                    next({ ...to, replace: true })

                } catch (error) {
                    // remove token and go to login page to re-login
                    await store.dispatch('account/resetToken');
                    Swal.fire({ type: 'error', title: 'Oops...', text: error, footer: '<a href>Has Error</a>'});
                    next(`/login?redirect=${to.path}`);
                    NProgress.done()
                }
            }
        }
    } else {
        // has no token
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
});

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
});