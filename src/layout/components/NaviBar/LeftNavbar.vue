<template>
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li v-if="!isTopNav && sidebarToggleBtn" class="nav-item">
            <a class="nav-link" style="cursor: pointer;"
               data-widget="pushmenu"
               :title="title"
               @click="toggleSidebar">
                <i class="el-icon-s-fold" :class="{'is-active':sidebar.opened}" :style="{'color':theme, 'font-size': 22+'px'}"></i>
            </a>
        </li>
        <transition name="fade" mode="out-in">
           <li class="nav-item d-none d-sm-inline-block" v-if="showMainDropdownMenu && !isTopNav">
               <main-select :logout-action="logoutAction"/>
           </li>
        </transition>

        <!-- spin buttons for main menu see: Layout Options / Top Navigation -->
        <va-button-group v-if="isTopNav">
            <va-button theme="success" name="Back" icon="fas fa-undo-alt" @btn-click="handleBackClick"/>
            <va-button theme="success" name="Menu" icon="fas fa-bars" :isDropdown="true"/>
            <va-dropdown id="mainBtnMenu"
                         :dropdownList="routesData"
                         theme="success"
                         location="left"
            />
        </va-button-group>
    </ul>
</template>

<script>
    import MainSelect from './components/MainSelect'
    import {  mapGetters, mapActions } from 'vuex'
    import { isExternalLink, isLabel, isHeader } from '@/utils/validate'
    import path from 'path'

    export default {
        name: "LeftNavbar",
        componentName: 'LeftNavbar',
        components: { MainSelect },
        data() {
            return {
                logoutAction: [
                    {
                        isDivider: true
                    },
                    {
                        icon: 'fas fa-sign-out-alt',
                        link: '#',
                        name: 'logout',
                        text: ' Log Out',
                        theme: 'warning',
                    }
                ],
                staticRoutes: [
                    {
                        text: 'Widgets',
                        router: { name: 'widgets' }
                    },
                    {
                        text: 'Calendar',
                        router: { name: 'calendar' }
                    },
                    {
                        text: 'Dashboards',
                        children: [
                            {
                                text: 'Dashboard v1',
                                router: { name: 'DashboardV1' }
                            },
                            {
                                text: 'Dashboard v2',
                                router: { name: 'DashboardV2' }
                            },
                            {
                                text: 'Dashboard v3',
                                router: { name: 'DashboardV3' }
                            }
                        ]
                    },

                ],
                isLogout: false,
                title: 'toggle Sidebar',
                routes: [],
            }
        },
        props: {
            isTopNav: { type: Boolean, default: false },
        },
        computed: {
            ...mapGetters([ 'layout', 'sidebar', 'showMainDropdownMenu', 'permission_routes', 'sidebarToggleBtn' ]),

            theme() {
                return this.$store.state.theme.customTheme
            },
            routesData() {
                return this.routes.concat(this.logoutAction)
            },
        },
        methods: {
            ...mapActions({
                openSidebar: 'app/openSidebar',
                closeSidebar: 'app/closeSidebar',
                toggleSidebar: 'app/toggleSidebar',
            }),
            // for back button
            handleBackClick() {
                // go to prev page
                this.$router.go(-1)
            },
            // we make table of routes without external links, headers, labels & hidden:'true' property
            getRoutes() {
                const appRoutes = this.permission_routes.filter(route => {
                    if (route.hidden || isLabel(route.path) || isHeader(route.path) || isExternalLink(route.path) ) return;
                    return route
                })
                this.routes = this.generateRoutes(appRoutes)
            },
            // Reshape the routes structure
            generateRoutes(routes, basePath = '/') {
                const res = []

                routes.forEach(route => {
                    const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

                    if (route.children && onlyOneShowingChild && !route.alwaysShow) {
                        route = onlyOneShowingChild
                    }
                    // prepare data for dropdown with language
                    const data = {
                        text: route.meta && route.meta.title,
                        router: { name: route.name },
                        path: path.resolve(basePath, route.path),
                    }

                    // recursive child routes
                    if (route.children) {
                        data.children = this.generateRoutes(route.children, data.path)
                    }
                    res.push(data)
                })

                return res
            },
            // reference: src/layout/components/Sidebar/SidebarItem.vue
            onlyOneShowingChild(children = [], parent) {
                let onlyOneChild = null
                const showingChildren = children.filter(item => !item.hidden)

                // When there is only one child route, the child route is displayed by default
                if (showingChildren.length === 1) {
                    onlyOneChild = showingChildren[0]
                    onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
                    return onlyOneChild
                }

                // Show parent if there are no child route to display
                if (showingChildren.length === 0) {
                    onlyOneChild = { ... parent, path: '', noShowingChildren: true }
                    return onlyOneChild
                }
                return false
            },
        },
        watch: {
            $route() {
                // change route path set sidebar state to default
                if (!this.sidebar.opened) {
                    this.openSidebar();
                } else if (this.layout.SidebarCollapse) {
                    this.closeSidebar();
                }
            }
        },
        created() {
           this.getRoutes()
        },
        mounted() {
            var sidebar = $('[data-widget="pushmenu"]');
            // check state of sidebar
            if (this.sidebar.opened) {
                sidebar.PushMenu('expand');
            } else {
                sidebar.PushMenu('collapse');
                this.closeSidebar();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-icon-s-fold.is-active {
        transform: rotate(90deg);
    }
</style>