<template>
   <div id="control-sidebar-settings">
      <div class="p-3">
           <h5 style="text-align:center;">Customize Components</h5>
           <template v-if="isEnableRememberComp">
               <p v-if="!rootTabs.isDefault">
                   <small>Save components settings for: <h6 style="color:red">{{rootTabs.menu}} menu</h6></small>
               </p>
               <p v-else>
                   <small>Save components settings for: <h6 style="color:red"> default menu</h6></small>
               </p>
               <hr class="mb-2"/>
           </template>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck1"
                        :disabled="isNavFixed"
                        v-model="sidebarLogo"
                        text="Sidebar Logo">
                </va-check-box>
                <p>
                  <small>Show the Logo in sidebar (disabled if layout: 'navbar-fixed' )</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck3"
                        v-model="sidebarUserPanel"
                        text="Sidebar User Panel">
                </va-check-box>
                <p>
                    <small>Show the User Panel in sidebar</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck12"
                        v-model="sidebarFooter"
                        text="Sidebar Footer ">
                </va-check-box>
                <p>
                    <small>Show Sidebar Footer with buttons</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck10"
                        v-model="sidebarToggleBtn"
                        text="Toggle button">
                </va-check-box>
                <p>
                    <small>Show the toggle sidebar button </small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck9"
                        v-model="mainDropdownMenu"
                        text="Main Dropdown">
                </va-check-box>
                <p>
                    <small>Show the main dropdown in Navi bar</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck5"
                        v-model="msgDropdownMenu"
                        text="Messages ">
                </va-check-box>
                <p>
                    <small>Show the messages in Navi bar</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck6"
                        v-model="noteDropdownMenu"
                        text="Notification ">
                </va-check-box>
                <p>
                    <small>Show the notification in Navi bar</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck7"
                        v-model="userDropdownMenu"
                        text="User ">
                </va-check-box>
                <p>
                    <small>Show the user dropdown in Navi bar</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck8"
                        v-model="languagesDrobdownMenu"
                        text="Languages ">
                </va-check-box>
                <p>
                    <small>Show the languages in Navi bar</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck11"
                        v-model="screenfull"
                        text="Screen Full">
                </va-check-box>
                <p>
                    <small>Show the screenfull in Navi bar</small>
                </p>
                <va-check-box
                        checkClass="icheck-primary"
                        id="sidebarSettingsCheck4"
                        v-model="pageHeader"
                        text="Page Header">
                </va-check-box>
                <p>
                    <small>Show the Page Header</small>
                </p>
                <va-switch
                        id="sidebarSettingsSwitch2"
                        v-model="breadcrumb"
                        text="Breadcrumb"
                        name="swichBreadcrumb"
                        :colors="{off: 'info', on: 'success'}">
                </va-switch>
                <p>
                   <small>Show the Breadcrumb in Navi-bar or Content Header</small>
                </p>
                <va-switch
                        id="sidebarSettingsSwitch3"
                        v-model="searchForm"
                        text="Search Form"
                        name="swichPageHeader"
                        :colors="{off: 'info', on: 'success'}">
                </va-switch>
                <p>
                    <small>Show the search form in Navibar or Sidebar</small>
                </p>

                <template v-if="isEnableRememberComp">
                  <hr class="mb-2"/>
                     <va-button v-waves
                            name="Save settings"
                            theme="primary"
                            :isGradient="true"
                            :isBlock="true"
                            @btn-click="saveComp">
                     </va-button>
                  <hr class="mb-2"/>
                </template>
                <br/>
           <br/>
      </div>
   </div>

</template>

<script>
    import { localStorageService } from '@/api/services';
    import waves from '@/directives//waves/index.js'

    export default {
        name: "ControlSidebarSettings",
        inject: ['rootTabs'],
        directives: { waves },
        props: {
            isEnableRememberComp: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                components: {
                    sidebarToggleBtn: this.$store.state.settings.sidebarToggleBtn,
                    sidebarLogo: this.$store.state.settings.sidebarLogo,
                    sidebarFooter: this.$store.state.settings.sidebarFooter,
                    sidebarUserPanel: this.$store.state.settings.sidebarUserPanel,
                    searchForm: this.$store.state.settings.searchForm,
                    mainDropdownMenu: this.$store.state.settings.mainDropdownMenu,
                    msgDropdownMenu: this.$store.state.settings.msgDropdownMenu,
                    noteDropdownMenu: this.$store.state.settings.noteDropdownMenu,
                    userDropdownMenu: this.$store.state.settings.userDropdownMenu,
                    languagesDrobdownMenu: this.$store.state.settings.languagesDrobdownMenu,
                    screenfull: this.$store.state.settings.screenfull,
                    breadcrumb: this.$store.state.settings.breadcrumb,
                    pageHeader: this.$store.state.settings.pageHeader
                },
                storageName: '',
                collection: 'Components',
            }
        },
        computed: {
            isNavFixed() {
                return this.$store.state.layouts.status.NavFixed
            },
            sidebarToggleBtn: {
                get() {
                    this.components.sidebarToggleBtn = this.$store.state.settings.sidebarToggleBtn
                    return this.components.sidebarToggleBtn
                },
                set(val) {
                    this.updateComp('sidebarToggleBtn', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'sidebarToggleBtn',
                        value: val
                    })
                }
            },
            sidebarLogo: {
                get() {
                    this.components.sidebarLogo = this.$store.state.settings.sidebarLogo
                    return this.components.sidebarLogo
                },
                set(val) {
                    this.updateComp('sidebarLogo', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'sidebarLogo',
                        value: val
                    })
                }
            },
            sidebarUserPanel: {
                get() {
                    this.components.sidebarUserPanel = this.$store.state.settings.sidebarUserPanel
                    return this.components.sidebarUserPanel
                },
                set(val) {
                    this.updateComp('sidebarUserPanel', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'sidebarUserPanel',
                        value: val
                    })
                }
            },
            sidebarFooter: {
                get() {
                    this.components.sidebarFooter = this.$store.state.settings.sidebarFooter
                    return this.components.sidebarFooter
                },
                set(val) {
                    this.updateComp('sidebarFooter', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'sidebarFooter',
                        value: val
                    })
                }
            },
            searchForm: {
                get() {
                    this.components.searchForm = this.$store.state.settings.searchForm
                    return this.components.searchForm
                },
                set(val) {
                    this.updateComp('searchForm', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'searchForm',
                        value: val
                    })
                }
            },
            mainDropdownMenu: {
                get() {
                    this.components.mainDropdownMenu = this.$store.state.settings.mainDropdownMenu
                    return this.$store.state.settings.mainDropdownMenu
                },
                set(val) {
                    this.updateComp('mainDropdownMenu', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'mainDropdownMenu',
                        value: val
                    })
                }
            },
            msgDropdownMenu: {
                get() {
                    this.components.msgDropdownMenu = this.$store.state.settings.msgDropdownMenu
                    return this.components.msgDropdownMenu
                },
                set(val) {
                    this.updateComp('msgDropdownMenu', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'msgDropdownMenu',
                        value: val
                    })
                }
            },
            noteDropdownMenu: {
                get() {
                    this.components.noteDropdownMenu = this.$store.state.settings.noteDropdownMenu
                    return this.components.noteDropdownMenu
                },
                set(val) {
                    this.updateComp('noteDropdownMenu', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'noteDropdownMenu',
                        value: val
                    })
                }
            },
            userDropdownMenu: {
                get() {
                    this.components.userDropdownMenu = this.$store.state.settings.userDropdownMenu
                    return this.components.userDropdownMenu
                },
                set(val) {
                    this.updateComp('userDropdownMenu', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'userDropdownMenu',
                        value: val
                    })
                }
            },
            languagesDrobdownMenu: {
                get() {
                    this.components.languagesDrobdownMenu = this.$store.state.settings.languagesDrobdownMenu
                    return this.components.languagesDrobdownMenu
                },
                set(val) {
                    this.updateComp('languagesDrobdownMenu', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'languagesDrobdownMenu',
                        value: val
                    })
                }
            },
            screenfull: {
                get() {
                    this.components.screenfull = this.$store.state.settings.screenfull
                    return this.components.screenfull
                },
                set(val) {
                    this.updateComp('screenfull', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'screenfull',
                        value: val
                    })
                }
            },
            pageHeader: {
                get() {
                    this.components.pageHeader = this.$store.state.settings.pageHeader
                    return this.components.pageHeader
                },
                set(val) {
                    this.updateComp('pageHeader', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'pageHeader',
                        value: val
                    })
                }
            },
            breadcrumb: {
                get() {
                    this.components.breadcrumb = this.$store.state.settings.breadcrumb
                    return this.components.breadcrumb
                },
                set(val) {
                    this.updateComp('breadcrumb', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'breadcrumb',
                        value: val
                    })
                }
            }
        },
        watch: {
            $route() {
                if ( this.isEnableRememberComp) {
                    this.checkCollections();
                }
            }
        },
        methods: {
            updateComp (input, value) {
                this.components[input] = value
            },
            async saveComp() {
                await this.$store.dispatch('storage/AddStorage', {
                        name: this.storageName,
                        val: this.components
                    })
                     .then(() => {
                         this.$Toaster.success(`SUCCESS - components set for ${this.rootTabs.noteMenu} is saved successfully !`)
                         this.$Toaster.options = {
                             "closeButton": true,
                         }
                     })
            },
            checkStorage() {
                if ( !this.isEnableRememberComp ) {
                    let isStorage = localStorageService.isStorageExist( this.storageName );
                    if (!isStorage) {
                        this.$store.dispatch('storage/RemoveStorage', this.storageName);
                    }
                }
            },
            checkCollections() {
                if( this.rootTabs.menu ) {
                    this.storageName = this.rootTabs.menu + this.collection
                } else {
                   this.storageName =  this.collection;
                }
            }
        },
        created() {
            if ( this.isEnableRememberComp) {
                let isStorage = localStorageService.isStorageExist( this.collection);
                if (!isStorage) {
                    this.$store.dispatch('storage/AddStorage', {
                        name: this.collection,
                        val: this.components
                    });
                }
                this.checkCollections()
            }
        }
    }
</script>
