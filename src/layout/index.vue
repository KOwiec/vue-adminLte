<template>
      <div v-if="loadData" class="wrapper">
            <navibar/>
            <sidebar/>
            <div class="wrapper"
                 :class="controlSidebar.opened && closeOutside
                     ? 'drawer-bg'
                     : ''"
                 @click="handleClickOutside"
            >
                <app-main />
                <app-footer />
            </div>
            <control-sidebar v-if="showSettings"/>
            <right-panel v-if="showRightPanel"/>
            <back-to-top v-if="isTopBtn && !controlSidebar.opened"/>
      </div>
      <div v-else class="loading-screen">
            <img class="loader-img" src="/static/plugins/preloaders/25.gif">
      </div>
</template>

<script>
    import { Navibar, Sidebar, AppMain, ControlSidebar, AppFooter, RightPanel, BackToTop } from './components'
    import { toggleBodyClass } from '@/utils/document'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "Layout",
        components: { Navibar, Sidebar, AppMain, ControlSidebar, AppFooter, BackToTop, RightPanel },
        data () {
            return {
                loadData: false,
                isTopBtn: false,
            }
        },
        computed: {
            ...mapGetters([ 'showSettings',
                            'textSmBody',
                            'refresh',
                            'controlSidebar',
                            'closeOutside',
                            'showRightPanel'])
        },
        watch: {
            $route() {
                this.isTopNavigation();
                this.isNavbarFixed();
                this.isCollapse();
                this.isTopBtn = this.checkIsTopBtn()
            },
            textSmBody(val)  {
                val ? toggleBodyClass('addClass', 'text-sm') : toggleBodyClass('removeClass', 'text-sm');
            },
            refresh(val) {
               val ? this.reRender() : ''
            }
        },
        methods: {
            ...mapActions({
                isTopNavigation: 'layouts/isTopNavigation',
                isNavbarFixed: 'layouts/isNavbarFixed',
                isCollapse: 'layouts/isSidebarCollapse'
            }),
            checkIsTopBtn () {
                return this.$route.meta.topBtn
            },
            // https://github.com/vuejs/Discussion/issues/356
            async reRender () {
                await this.$nextTick(() => {
                    console.log('re-render start');
                    this.loadData = true;
                    this.$nextTick(() => {
                        console.log('re-render end')
                    })
                });
            },
            // close control sidebar by click not only in RightNavbar, see: store/module/app  controlSidebar.closeByClickOutside: false (default)
            handleClickOutside() {
                if (this.controlSidebar.opened && this.closeOutside) {
                    var control_sidebar = $('[data-widget="control-sidebar"]');
                    control_sidebar.ControlSidebar('collapse');
                    this.$store.dispatch('app/closeControlSidebar')
                }
            }
        },
        mounted() {
            setTimeout(() => {
                    this.reRender();
                    this.loadData = false;
                }, 1000)
        },
        created () {
            this.isTopNavigation();
            this.isNavbarFixed();
            this.isCollapse();
            this.isTopBtn = this.checkIsTopBtn()
        },
    }
</script>

<style scoped>
     .wrapper {
           overflow: auto;
     }
    .loading-screen {
        position: absolute;
        background-color: #2d3a4b !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .loader-img {
        position: absolute;
        background-color: transparent;
        top: 50%;
        left: 50%;
        margin: -50px 0px 0px -50px;
        width: 5%;
    }
    .drawer-bg {
        background: #000;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 999;
    }
</style>
