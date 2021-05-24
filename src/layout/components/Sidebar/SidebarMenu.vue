<template>
    <!-- Sidebar Menu-->
    <nav class="mt-2">
        <va-menu :default-active="activeMenu"
                 :collapse="isCollapse"
                 :menu-color="menuColor"
                 :menu-item-color="menuItemColor"
                 :text-color="menuText"
                 :active-text-color="menuActiveText"
                 :is-hover-effect="true"
                 :only-hover="true">

              <sidebar-item v-for="route in routes"
                              :key="route.path"
                              :item="route"
                              :base-path="route.path"
              />
        </va-menu>
    </nav>
    <!--/.sidebar-menu  -->
</template>

<script>
    import SidebarItem from './SidebarItem'
    import { mapGetters } from 'vuex'

    export default {
        name: "sidebarMenu",
        components: { SidebarItem },
        props: {
            menuColor: { type: String, default: '' },

            menuItemColor: { type: String, default: '' },

            menuText: { type: String, default: '' },

            menuActiveText: { type: String, default: '' }

        },
        computed: {
            ...mapGetters([ 'sidebar','noExpandSidebar', 'permission_routes' ]),
            // hide profile page, without permission routes - use '$router.options.routes'
            routes() {
                return this.permission_routes.filter(route => {
                    if (!route.hidden) {
                       // console.log('route: ' +route.path);
                        return route
                    }
                })
            },
            activeMenu() {
                const route = this.$route;
                const {meta, path} = route;
                // if set path, the sidebar will highlight the path you set ( needed for CRUD in API ) -todo
                if (meta.activeMenu) {
                    return meta.activeMenu
                }
                return path
            },
            isCollapse() {
                return !this.sidebar.opened && this.noExpandSidebar
            }
        }
    }
</script>

