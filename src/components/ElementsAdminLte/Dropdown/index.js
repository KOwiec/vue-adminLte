import Vue from 'vue'

import Dropdown from './src/Dropdown'
import DropdownMenu from './src/DropdownMenu'
import DropdownItem from './src/DropdownItem'
import DropdownMenuItem from './src/DropdownMenuItem'
import DropdownSubmenu from './src/DropdownSubmenu'

// register globally

Vue.component('va-dropdown', Dropdown)
Vue.component('va-dropdown-menu', DropdownMenu);
Vue.component('va-dropdown-item', DropdownItem);
Vue.component('va-dropdown-menu-item', DropdownMenuItem);
Vue.component('va-dropdown-submenu', DropdownSubmenu)

export default { Dropdown, DropdownMenu, DropdownItem, DropdownMenuItem, DropdownSubmenu } ;