<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar"
         :class="[ noExpandSidebar ? 'sidebar-no-expand': '',
                   colors.sidebarColor ? `${colors.sidebarColor} elevation-4` : 'sidebar-dark-primary elevation-4'
                 ]" >
    <!-- Logo -->
    <logo v-if="showLogo" class="brand-logo"/>
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar" :style="sidebarBgColor">
      <div>
        <!-- Sidebar user panel (optional) -->
        <sidebar-user-panel v-if="showUserPanel"/>
        <!-- Sidebar Search Form-->
        <search-form v-if="showSidebarSearch" type="sidebar" :search-color="searchColor"/>
      </div>
      <!-- Sidebar Menu -->
      <sidebar-menu
              :menu-color="menuColor"
              :menu-item-color="menuItemColor"
              :menu-text="variables.menuText"
              :menu-active-text="variables.menuActiveText"
      />
      <sidebar-footer v-show="showFooter"/>
    </div>
  </aside>
</template>

<script>

import SidebarUserPanel from './components/SidebarUserPanel'
import SidebarFooter from './components/SidebarFooter'
import SearchForm from '@/components/Search/SearchForm.vue'
import Logo from './components/Logo'
import SidebarMenu from './SidebarMenu'
import {  mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'

export default {
    name: 'Sidebar',
    components: { SidebarUserPanel, SidebarMenu, Logo, SearchForm, SidebarFooter },
    computed: {
        ...mapGetters([ 'noExpandSidebar', 'colors', 'layout', 'showSearchForm', 'sidebar' ]),
        showLogo() {
            return this.$store.state.settings.sidebarLogo || this.layout.NavFixed
        },
        showSidebarSearch() {
            return !this.showSearchForm && this.sidebar.opened
        },
        showUserPanel() {
            return this.$store.state.settings.sidebarUserPanel
        },
        showFooter() {
            return this.$store.state.settings.sidebarFooter && this.sidebar.opened
        },
        sidebarBgColor() {
            if ( this.colors.sidebarBg !== '' ) {
                return `background-color: ${this.colors.sidebarBg} !important`
            }
            return ''
        },
        variables() {
            return variables
        },
        menuColor() {
            return this.colors.sidebarMode === 'dark' ? this.variables.menuBgDark : this.variables.menuBgLight
        },
        menuItemColor() {
            return this.colors.sidebarMode === 'dark' ? this.variables.menuItemDark : this.variables.menuItemLight
        },
        searchColor() {
            if ( this.colors.sidebarBg !== '' ) {
                return this.colors.sidebarMode === 'dark' ? this.variables.sidebarSearchDark : this.variables.sidebarSearchLight
            }
            return ''
        }
    },

    mounted() {
        // initialize Layout for main-sidebar (AdminLte)
        $('body').Layout();
    }
}
</script>

<style scoped>

</style>