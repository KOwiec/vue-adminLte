// base on element-ui menu components
import Vue from 'vue'
import Menu from './src/Menu';
import MenuItem from './src/MenuItem';
import Submenu from './src/Submenu';

// register globally
Vue.component('va-menu', Menu);
Vue.component('va-menu-item', MenuItem);
Vue.component('va-submenu', Submenu);

export default { Menu, MenuItem, Submenu };


