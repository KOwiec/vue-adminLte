import Vue from 'vue'
import Router from 'vue-router'
import {constantRoutes, asyncRoutes} from './routes'

Vue.use(Router);

const createRouter = () => new Router({
     //mode: 'history',   // require service support
     routes: constantRoutes
});
const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher   // reset router
}

export function allRoutes() {
    return constantRoutes.concat(asyncRoutes)
}

export default router

