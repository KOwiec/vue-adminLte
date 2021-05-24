import Vue from 'vue'
import NavTabs from './src/NavTabs.vue';
import TabPane from './src/TabPane.vue';

Vue.component('va-nav-tabs', NavTabs);
Vue.component('va-tab-pane', TabPane);

export default { NavTabs, TabPane };