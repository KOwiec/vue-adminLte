<template>
    <!-- Control Sidebar -->
    <aside class="control-sidebar" :class="[`control-sidebar-${controlSidebarMode}`, textSmControlSidebar ? 'text-sm': '']"
                                   :style="controlSidebarWidth">
        <!-- Create tabs  -->
        <va-nav-tabs class="p-3 control-sidebar-content"
                              :cardHeaderTabs="false"
                              :refresh="componentKey"
                              :controlSidebar="true"
                              :navClass="controlSidebarTabs"
                              :activeTab="controlSidebar.activeTab"
        >
            <va-tab-pane v-if="showLayoutTab" slot="tabContent" id="control-sidebar-layout-tab" name="layout" icon="fas fa-layer-group">
                <control-sidebar-layout :isEnableRememberCustom="enableRememberCustom" @checkBox-click="forceRender"/>
            </va-tab-pane>

            <va-tab-pane v-if="showColorTab" slot="tabContent" id="control-sidebar-colors-tab" name="colors" icon="fas fa-palette">
                <control-sidebar-colors :isEnableRememberColors="enableRememberColors"/>
            </va-tab-pane>

            <va-tab-pane v-if="showSettingsTab" slot="tabContent" id="control-sidebar-settings-tab" name="settings" icon="fas fa-cogs">
                <control-sidebar-settings :isEnableRememberComp="enableRememberComp" />
            </va-tab-pane>

            <va-tab-pane v-if="showHomeTab" slot="tabContent"  id="control-sidebar-start" name="roles" icon="fa fa-user">
                <control-sidebar-start />
            </va-tab-pane>
            <va-tab-pane v-if="showPageTab" slot="tabContent" :isDisabled="isDefault" id="control-sidebar-plus" :title="noteMenu" :name="menu" icon="fa fa-book-reader" >
                <control-sidebar-pages>
                    <!-- Create content to customize pages (see: @/router/routes.js ->  makeCollections) -->
                </control-sidebar-pages>
            </va-tab-pane>

        </va-nav-tabs>

    </aside>
</template>

<script>
   import ControlSidebarColors from './components/ControlSidebarColors.vue'
   import ControlSidebarLayout from './components/ControlSidebarLayout.vue'
   import ControlSidebarSettings from './components/ControlSidebarSettings.vue'
   import ControlSidebarStart from './components/ControlSidebarStart.vue'
   import ControlSidebarPages from './components/ControlSidebarPages.vue'
   import {  mapGetters } from 'vuex'

   export default {
       name: "ControlSidebar",
       components: {
           ControlSidebarColors,
           ControlSidebarLayout,
           ControlSidebarSettings,
           ControlSidebarStart,
           ControlSidebarPages
       },
       provide() {
           return {
               rootTabs: this
           }
       },
       data () {
           return {
               isDefault: null,
               menu: null,
               componentKey: 0,
           }
       },
       watch: {
           $route() {
               this.makeCollections()
           }
       },
       computed: {
           ...mapGetters([
               'enableRememberColors',
               'enableRememberCustom',
               'enableRememberComp',
               'controlSidebar',
               'controlSidebarMode',
               'textSmControlSidebar',
               'controlSidebarWidthPlus',
               'showPageTab',
               'showSettingsTab',
               'showColorTab',
               'showLayoutTab',
               'showHomeTab',
               'controlSidebarTabs'
           ]),
           noteMenu() {
               return this.menu !== '' ? this.menu +' menu': 'default menu'
           },
           collectionRoutes() {
               return this.$router.options.routes.filter(route => {
                   if (route.meta && route.meta.makeCollections) {
                      // console.log('route: ' +route.name);
                       return route;
                   }
               });
           },
           controlSidebarWidth() {
               if (this.controlSidebarWidthPlus) {
                   return `width: ${this.$store.state.theme.controlSidebarWidth} !important`
               }
               return ''
           }
       },
       methods: {
           forceRender() {
               this.componentKey += 1;
           },
           getRouteKey() {
               // show parent route with name
               const key = this.$route.matched[0].name;
               if (!key) {
                   return false
               } else {
                   this.isDefault = false;
                   return key.trim().toLocaleLowerCase()
               }
           },
           makeCollections() {
               // only show routes with makeCollections in meta
               if (this.$route.matched.some(item => item.meta.makeCollections)) {
                   this.menu = this.getRouteKey();
               } else {
                   this.isDefault = true;
                   this.menu = ''
               }
           }
       },
       created() {
           this.makeCollections();
       },
       mounted() {
           this.$nextTick(() => {
                this.forceRender()
           })
       }
   }
</script>

<style scoped>
    .control-sidebar {
        height: 100vh;
        overflow: auto;
    }
</style>



