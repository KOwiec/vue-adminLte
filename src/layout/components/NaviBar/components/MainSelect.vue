<template>
    <va-nav-dropdown
            id="MainDropdownMenu"
            :title="$t('navbar.main')"
            :isTooltip="false"
            navColor="info"
            :is-toggle="true">
        <va-dropdown-menu location="left">
            <va-dropdown-item v-for="(item, index) in routesMain"
                              :key="index"
                              :item="item"
                              @click.native="handleItemClick(item)"
            />
        </va-dropdown-menu>
    </va-nav-dropdown>
</template>

<script>
    export default {
        name: "MainSelect",
        props: {
            // see: LeftNavbar.vue && routesData()
            logoutAction: { type: Array },
        },
        data() {
            return {
                mainList: [
                    {
                        icon: 'fas fa-home',
                        router: { name: 'DashboardV1' },
                        text: 'Dashboard v1'
                    },
                    {
                        icon: 'fas fa-tachometer-alt',
                        router: { name: 'DashboardV2' },
                        text: 'Dashboard v2'
                    },
                    {
                        icon: 'fas fa-calendar',
                        router: { name: 'Calendar' },
                        text: 'Calendar'
                    },
                    {
                        link: 'https://github.com/ColorlibHQ/AdminLTE/tree/v3.0.0-beta.1',
                        text: 'Github'
                    },
                    {
                        link: 'https://adminlte.io/docs/2.4/installation',
                        text: 'Docs 2.4',
                        isDisabled: true
                    },
                    {
                        link: 'https://adminlte.io/docs/3.0/upgrade-guide.html',
                        text: 'Docs 3.0'
                    }
                ],
            }
        },
        computed: {
            routesMain() {
                return this.mainList.concat(this.logoutAction)
            }
        },
        methods: {
            handleItemClick(item) {
                if (item.name && item.name === 'logout') {
                    this.logout()
                }
                return false
            },
            async logout() {
                await this.$store.dispatch('account/logout');
                this.$router.push(`/login?redirect=${this.$route.fullPath}`)
            },
        }
    }
</script>
