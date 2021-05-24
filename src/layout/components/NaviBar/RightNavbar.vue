<template>
    <!-- Right navbar links -->
    <ul :class="getUlClass">

        <!-- Messages Dropdown Menu-->
        <messages-select v-if="showMsgDropdownMenu"/>

        <!-- Notifications Dropdown Menu -->
        <notifications-select v-if="showNoteDropdownMenu"/>

        <!-- Language Dropdown Menu -->
        <lang-select v-if="showlanguagesDrobdownMenu"/>

        <!-- User Dropdown Menu -->
        <user-select v-if="showUserDropdownMenu" title="profile"/>

        <!-- Fullscreen -->
        <screenfull v-if="screenfull" id="fullscreen" :theme="theme" title="Full screen"/>

        <!-- control-sidebar -->
        <li class="nav-item" v-if="checkWidget">
            <a class="nav-link"
               data-widget="control-sidebar"
               data-controlsidebar-slide="true"
               :data-scrollbar-theme="changeScrollTheme"
               data-scrollbar-auto-hide="l"
               :title="title"
               @click="toggleControlSidebar"
               style="cursor: pointer;"
            >
                <i :class="getIcon" :style="{'color':theme, 'font-size': 17+'px'}"></i>
            </a>
        </li>
    </ul>
</template>

<script>

    import UserSelect from './components/UserSelect'
    import MessagesSelect from './components/MessagesSelect'
    import NotificationsSelect from './components/NotificationsSelect'
    import LangSelect from '@/components/LangSelect'
    import Screenfull from '@/components/Screenfull'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "RightNavbar",
        components: { UserSelect, NotificationsSelect, MessagesSelect, LangSelect, Screenfull },
        data() {
            return {
                title: 'toggle Control Sidebar'
            }
        },
        props: {
            isTopNav: { type: Boolean, default: false },
        },
        computed: {
            ...mapGetters([ 'controlSidebar', 'showSettings', 'showMsgDropdownMenu', 'showNoteDropdownMenu', 'screenfull',
                            'showUserDropdownMenu', 'showlanguagesDrobdownMenu', 'controlSidebarWidthPlus', 'controlSidebarMode'
            ]),
            getIcon() {
                return this.controlSidebar.opened ? 'fas fa-window-close' : 'fa fa-th-large'
            },
            getUlClass() {
                return this.isTopNav ? 'order-1 order-md-3 navbar-nav navbar-no-expand ml-auto' : 'navbar-nav ml-auto'
            },
            checkWidget () {
                return this.showSettings && !this.isTopNav
            },
            theme() {
                return this.$store.state.theme.customTheme
            },
            changeScrollTheme() {
                if (this.controlSidebarMode === 'dark') return "os-theme-dark";
                   return "os-theme-light";
            }
        },
        methods: {
             ...mapActions({
                closeControlSidebar: 'app/closeControlSidebar',
                toggleControlSidebar: 'app/toggleControlSidebar'
            }),
        },
        watch: {
            $route() {
                // change route path set control sidebar state to default
                var control_sidebar = $('[data-widget="control-sidebar"]');
                if (this.controlSidebar.opened) {
                    control_sidebar.ControlSidebar('collapse');
                    this.closeControlSidebar();
                }
            }
        },
        mounted() {
            var control_sidebar = $('[data-widget="control-sidebar"]');
            // check state of control sidebar
            if (this.controlSidebar.opened && !this.controlSidebarWidthPlus) {
                control_sidebar.ControlSidebar('show');
            } else {
                control_sidebar.ControlSidebar('collapse');
                this.closeControlSidebar();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fa-window-close {
        transform: scale(1.5);
    }
</style>