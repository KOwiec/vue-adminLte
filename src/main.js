import Vue from 'vue'

import './styles/index'  // global css
import './config/index'  // global js

import App from './App'
import store  from './store'
import router from './router'
import './utils/error-log'      // error log
import './router/permission'    // permission control
import '../BACKEND-fake'        // fake api data system - in production simply remove

import '@/components'            // vue-adminlte components
import '@/components/ElementUI'  // ElementUI components

import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';    // scroll bars vue
Vue.component('overlay-scrollbars', OverlayScrollbarsComponent);  // global registration component
// control-sidebar & sidebar use Overlay Scrollbars from AdminLTE (see: src\layout\components\NaviBar\RightNavbar.vue for control sidebar)

import VeeValidate from 'vee-validate' // for form validation on the login and registration pages
Vue.use(VeeValidate);                  //   (VeeValidate, { events: 'input|blur' })

import EventBus from './config/eventBus.js'   // global event component
Vue.prototype.$bus = EventBus;

import Swal from 'sweetalert2'                // global messages components
Vue.prototype.$Swal = Swal;

import Toastr from 'admin-lte/plugins/toastr/toastr.min.js'  // global alerts
Vue.prototype.$Toaster = Toastr;

import Raphael from 'admin-lte/plugins/raphael/raphael.min.js'  // Raphael global for morris charts & maps
global.Raphael = Raphael;

global.moment = require('moment');    // moment & Datetime picker
require('tempusdominus-bootstrap-4');

//global filters & register utility filters
import * as filters from './filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

