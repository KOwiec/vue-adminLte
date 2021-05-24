<template>
   <div id="control-sidebar-layout">
     <div class="p-3">
         <h5 style="text-align:center;">Customize AdminLTE</h5>
         <template v-if="isEnableRememberCustom">
            <p v-if="!rootTabs.isDefault">
               <small>Save custom settings for: <h6 style="color:red">{{rootTabs.menu}} menu</h6></small>
            </p>
            <p v-else>
               <small>Save custom settings for: <h6 style="color:red"> default menu</h6> </small>
            </p>
            <hr class="mb-2"/>
         </template>
         <div>
            <h6 style="text-align:center; color:Tomato;">Control Sidebar settings </h6>
            <small v-if="!rootTabs.isDefault">default menu only </small>
            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck12"
                    :disabled="!rootTabs.isDefault"
                    v-model="controlSidebarMode"
                    :text="`Color style: ${custom.controlSidebarMode}`">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck23"
                    :disabled="!rootTabs.isDefault"
                    v-model="controlSidebarTabs"
                    :text="`Tabs style: ${custom.controlSidebarTabs}`">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck13"
                    :disabled="!rootTabs.isDefault"
                    v-model="closeControlSidebarOutside"
                    text="Close by click on page content area" >
            </va-check-box>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck22"
                    :disabled="!rootTabs.isDefault"
                    v-model="controlSidebarWidthPlus"
                    text=" Change width">
            </va-check-box>
            <small> Change: src/styles/variables.scss </small>
            <p> </p>

            <h6>Available tabs:</h6>

               <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" disabled id="cSidebarLayoutCheck16" v-model="showLayoutTab" value="option1">
                  <label for="cSidebarLayoutCheck16" class="custom-control-label"> Layout Tab <small style="color:red"> (this)</small></label>
               </div>

               <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" id="cSidebarLayoutCheck15" v-model="showColorTab" value="option1">
                  <label for="cSidebarLayoutCheck15" class="custom-control-label"> Colors Tab </label>
               </div>

               <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" id="cSidebarLayoutCheck17" v-model="showSettingsTab" value="option1">
                  <label for="cSidebarLayoutCheck17" class="custom-control-label"> Components Tab </label>
               </div>

               <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" id="cSidebarLayoutCheck18" v-model="showHomeTab" value="option1">
                  <label for="cSidebarLayoutCheck18" class="custom-control-label"> Home Tab </label>
               </div>

               <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" id="cSidebarLayoutCheck14" v-model="showPageTab" value="option1">
                  <label for="cSidebarLayoutCheck14" class="custom-control-label"> Pages Tab </label>
               </div>
               <small>Pages tabs for collections (demo): </small><br/>
               <ul>
                 <div v-for="route in rootTabs.collectionRoutes" :key="route.path">
                    <router-link :to="route.path">
                       <li><span style="color:#3962ff">{{route.name}}</span><small> tab</small></li>
                    </router-link>
                 </div>
               </ul>

            <hr class="mb-2"/>
            <h6 style="text-align:center; color:Tomato;">Text Settings </h6>
            <small v-if="!rootTabs.isDefault">default menu only </small>

            <va-check-box
                    checkClass="icheck-success"
                    id="cSidebarLayoutCheck2"
                    :disabled="!rootTabs.isDefault"
                    v-model="textSmBody"
                    text="Body small text">
            </va-check-box>
            <p v-if="isEnableRememberCustom"><small style="color:red">  After save it, page reloaded.</small></p>
            <hr class="mb-2"/>
            Parts body small text
            <p> </p>
            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck3"
                    :disabled="checkDisabled"
                    v-model="textSmHeader"
                    text="Navbar small text">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck4"
                    :disabled="checkDisabled"
                    v-model="textSmSidebar"
                    text="Sidebar small text">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck5"
                    :disabled="checkDisabled"
                    v-model="textSmFooter"
                    text="Footer small text">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck11"
                    :disabled="checkDisabled"
                    v-model="textSmBrand"
                    text="Brand small text">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck20"
                    :disabled="checkDisabled"
                    v-model="textSmControlSidebar"
                    text="Control Sidebar s. text">
            </va-check-box>
            <hr class="mb-2"/>
            <h6 style="text-align:center; color:Tomato;">Sidebar settings </h6>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck6"
                    v-model="flatSidebar"
                    text="Nav flat style">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck7"
                    v-model="legacySidebar"
                    text="Nav legacy style">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck8"
                    v-model="compactSidebar"
                    text="Nav compact">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck9"
                    v-model="childIndentSidebar"
                    text="Nav child indent">
            </va-check-box>
            <p> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck10"
                    v-model="noExpandSidebar"
                    text="Open/Close style">
            </va-check-box>
            <p><small>Disable hover/focus auto expand</small> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck25"
                    v-model="collapseHideChild"
                    text="Hide open submenu">
            </va-check-box>
            <p><small>( hide if collapse sidebar )</small> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck21"
                    v-model="menuIconsSize"
                    text="Menu icons size">
            </va-check-box>
            <p><small>Change: /styles/variables.scss</small> </p>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck24"
                    v-model="accordionStyle"
                    text="Accordion menu style">
            </va-check-box>
            <p><small>Only one submenu is open.</small></p>

            <hr class="mb-2"/>
            <h6 style="text-align:center; color:Tomato;">Right Panel settings </h6>

            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck19"
                    v-model="showRightPanel"
                    text="Show Right Panel">
            </va-check-box>
            <p> </p>
            <hr class="mb-2"/>
            <h6 style="text-align:center; color:Tomato;">NavBar settings </h6>
            <va-check-box
                    checkClass="icheck-primary"
                    id="cSidebarLayoutCheck1"
                    v-model="fixedHeader"
                    text="No Navbar border">
            </va-check-box>

            <template v-if="isEnableRememberCustom">
              <hr class="mb-2"/>
                <va-button v-waves
                       name="Save settings"
                       theme="primary"
                       :isGradient="true"
                       :isBlock="true"
                       @btn-click="saveCustom">
                </va-button>
              <hr class="mb-2"/>
            </template>
            <br/>
         </div>
         <br/>
     </div>
   </div>
</template>

<script>
    import { localStorageService } from '@/api/services';
    import waves from '@/directives//waves/index.js'

    export default {
        name: "SidebarTabLayout",

        inject: ['rootTabs'],
        directives: { waves },
        props: {
            isEnableRememberCustom: {
                type: Boolean,
                default: false
            },
            onlyDefault: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                custom: {
                    // naviBar
                    fixedHeader: this.$store.state.settings.fixedHeader,
                    // text
                    textSmHeader: this.$store.state.settings.textSmHeader,
                    textSmSidebar: this.$store.state.settings.textSmSidebar,
                    textSmBody: this.$store.state.settings.textSmBody,
                    textSmFooter: this.$store.state.settings.textSmFooter,
                    textSmBrand: this.$store.state.settings.textSmBrand,
                    textSmControlSidebar: this.$store.state.settings.textSmControlSidebar,
                    // sidebar
                    flatSidebar: this.$store.state.settings.flatSidebar,
                    legacySidebar: this.$store.state.settings.legacySidebar,
                    compactSidebar: this.$store.state.settings.compactSidebar,
                    childIndentSidebar: this.$store.state.settings.childIndentSidebar,
                    noExpandSidebar: this.$store.state.settings.noExpandSidebar,
                    collapseHideChild: this.$store.state.settings.collapseHideChild,
                    accordionStyle: this.$store.state.settings.accordionStyle,
                    menuIconsSize: this.$store.state.settings.menuIconsSize,
                    // control sidebar
                    controlSidebarMode: this.$store.state.settings.controlSidebarMode,
                    controlSidebarTabs: this.$store.state.settings.controlSidebarTabs,
                    controlSidebarWidthPlus: this.$store.state.settings.controlSidebarWidthPlus,
                    closeControlSidebarOutside: this.$store.state.settings.closeControlSidebarOutside,
                    showPageTab: this.$store.state.settings.showPageTab,
                    showColorTab: this.$store.state.settings.showColorTab,
                    showLayoutTab: this.$store.state.settings.showLayoutTab,
                    showSettingsTab: this.$store.state.settings.showSettingsTab,
                    showHomeTab: this.$store.state.settings.showHomeTab,
                    // right panel
                    showRightPanel: this.$store.state.settings.showRightPanel
                },
                oldTextSmBody: this.$store.state.settings.textSmBody,
                storageName: '',
                collection: 'Custom',
            }
        },
        computed: {
            checkDisabled() {
                return this.textSmBody
            },
            controlSidebarMode: {
                get() {
                    this.custom.controlSidebarMode = this.$store.state.settings.controlSidebarMode;
                    return this.custom.controlSidebarMode === 'dark'
                },
                set(val) {
                    if (val === false) {
                        this.custom.controlSidebarMode = 'light'
                    } else {
                        this.custom.controlSidebarMode = 'dark'
                    }
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'controlSidebarMode',
                        value: this.custom.controlSidebarMode
                    });
                }
            },
            controlSidebarTabs: {
                get() {
                    this.custom.controlSidebarTabs = this.$store.state.settings.controlSidebarTabs;
                    return this.custom.controlSidebarTabs === 'pills'
                },
                set(val) {
                    if (val === false) {
                        this.custom.controlSidebarTabs = 'tabs'
                    } else {
                        this.custom.controlSidebarTabs = 'pills'
                    }
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'controlSidebarTabs',
                        value: this.custom.controlSidebarTabs
                    });
                }
            },
            controlSidebarWidthPlus: {
                get() {
                    this.custom.controlSidebarWidthPlus =  this.$store.state.settings.controlSidebarWidthPlus;
                    return this.custom.controlSidebarWidthPlus
                },
                set(val) {
                    this.updateCustom('controlSidebarWidthPlus', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'controlSidebarWidthPlus',
                        value: val
                    });
                }
            },
            closeControlSidebarOutside: {
                get() {
                    this.custom.closeControlSidebarOutside = this.$store.state.settings.closeControlSidebarOutside;
                    return this.custom.closeControlSidebarOutside
                },
                set(val) {
                    this.updateCustom('closeControlSidebarOutside', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'closeControlSidebarOutside',
                        value: val
                    });
                }
            },
            showPageTab: {
                get() {
                    this.custom.showPageTab = this.$store.state.settings.showPageTab
                    return this.custom.showPageTab
                },
                set(val) {
                    this.updateCustom('showPageTab', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'showPageTab',
                        value: val
                    });
                    // re-render start
                    this.$emit('checkBox-click');
                }
            },
            showColorTab: {
                get() {
                    this.custom.showColorTab = this.$store.state.settings.showColorTab
                    return this.custom.showColorTab
                },
                set(val) {
                    this.updateCustom('showColorTab', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'showColorTab',
                        value: val
                    });
                    // re-render start
                    this.$emit('checkBox-click');
                }
            },
            showLayoutTab: {
                get() {
                    this.custom.showLayoutTab = this.$store.state.settings.showLayoutTab
                    return this.custom.showLayoutTab
                },
                set(val) {
                    this.updateCustom('showLayoutTab', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'showLayoutTab',
                        value: val
                    });
                    // re-render start
                    this.$emit('checkBox-click');
                }
            },
            showSettingsTab: {
                get() {
                    this.custom.showSettingsTab = this.$store.state.settings.showSettingsTab
                    return this.custom.showSettingsTab
                },
                set(val) {
                    this.updateCustom('showSettingsTab', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'showSettingsTab',
                        value: val
                    });
                    // re-render start
                    this.$emit('checkBox-click');
                }
            },
            showHomeTab: {
                get() {
                    this.custom.showHomeTab = this.$store.state.settings.showHomeTab
                    return this.custom.showHomeTab
                },
                set(val) {
                    this.updateCustom('showHomeTab', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'showHomeTab',
                        value: val
                    });
                    // re-render start
                    this.$emit('checkBox-click');
                }
            },
            fixedHeader: {
                get() {
                    this.custom.fixedHeader = this.$store.state.settings.fixedHeader
                    return this.custom.fixedHeader
                },
                set(val) {
                    this.updateCustom('fixedHeader', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'fixedHeader',
                        value: val
                    });
                }
            },
            textSmHeader: {
                get() {
                    this.custom.textSmHeader = this.$store.state.settings.textSmHeader
                    return this.custom.textSmHeader
                },
                set(val) {
                    this.updateCustom('textSmHeader', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'textSmHeader',
                        value: val
                    });
                }
            },
            textSmSidebar: {
                get() {
                    this.custom.textSmSidebar = this.$store.state.settings.textSmSidebar
                    return this.custom.textSmSidebar
                },
                set(val) {
                    this.updateCustom('textSmSidebar', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'textSmSidebar',
                        value: val
                    });
                }
            },
            textSmControlSidebar: {
                get() {
                    this.custom.textSmControlSidebar = this.$store.state.settings.textSmControlSidebar
                    return this.custom.textSmControlSidebar
                },
                set(val) {
                    this.updateCustom('textSmControlSidebar', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'textSmControlSidebar',
                        value: val
                    });
                }
            },
            textSmBody: {
                get() {
                    this.custom.textSmBody = this.$store.state.settings.textSmBody
                    return this.custom.textSmBody
                },
                set(val) {
                    this.updateCustom('textSmBody', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'textSmBody',
                        value: val
                    });
                }
            },
            textSmFooter: {
                get() {
                    this.custom.textSmFooter = this.$store.state.settings.textSmFooter
                    return this.custom.textSmFooter
                },
                set(val) {
                    this.updateCustom('textSmFooter', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'textSmFooter',
                        value: val
                    });
                }
            },
            textSmBrand: {
                get() {
                    this.custom.textSmBrand = this.$store.state.settings.textSmBrand
                    return this.custom.textSmBrand
                },
                set(val) {
                    this.updateCustom('textSmBrand', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'textSmBrand',
                        value: val
                    });
                }
            },
            flatSidebar: {
                get() {
                    this.custom.flatSidebar = this.$store.state.settings.flatSidebar
                    return this.custom.flatSidebar
                },
                set(val) {
                    this.updateCustom('flatSidebar', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'flatSidebar',
                        value: val
                    });
                }
            },
            legacySidebar: {
                get() {
                    this.custom.legacySidebar = this.$store.state.settings.legacySidebar
                    return this.custom.legacySidebar
                },
                set(val) {
                    this.updateCustom('legacySidebar', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'legacySidebar',
                        value: val
                    });
                }
            },
            compactSidebar: {
                get() {
                    this.custom.compactSidebar = this.$store.state.settings.compactSidebar
                    return this.custom.compactSidebar
                },
                set(val) {
                    this.updateCustom('compactSidebar', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'compactSidebar',
                        value: val
                    });
                }
            },
            childIndentSidebar: {
                get() {
                    this.custom.childIndentSidebar = this.$store.state.settings.childIndentSidebar
                    return this.custom.childIndentSidebar
                },
                set(val) {
                    this.updateCustom('childIndentSidebar', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'childIndentSidebar',
                        value: val
                    });
                }
            },
            noExpandSidebar: {
                get() {
                    this.custom.noExpandSidebar = this.$store.state.settings.noExpandSidebar
                    return this.custom.noExpandSidebar
                },
                set(val) {
                    this.updateCustom('noExpandSidebar', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'noExpandSidebar',
                        value: val
                    });
                }
            },
            collapseHideChild: {
                get() {
                    this.custom.collapseHideChild = this.$store.state.settings.collapseHideChild
                    return this.custom.collapseHideChild
                },
                set(val) {
                    this.updateCustom('collapseHideChild', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'collapseHideChild',
                        value: val
                    });
                }
            },
            accordionStyle: {
                get() {
                    this.custom.accordionStyle = this.$store.state.settings.accordionStyle
                    return this.custom.accordionStyle
                },
                set(val) {
                    this.updateCustom('accordionStyle', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'accordionStyle',
                        value: val
                    });
                }
            },
            menuIconsSize: {
                get() {
                    this.custom.menuIconsSize =  this.$store.state.settings.menuIconsSize;
                    return this.custom.menuIconsSize
                },
                set(val) {
                    this.updateCustom('menuIconsSize', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'menuIconsSize',
                        value: val
                    });
                }
            },
            showRightPanel: {
                get() {
                    this.custom.showRightPanel = this.$store.state.settings.showRightPanel
                    return this.custom.showRightPanel
                },
                set(val) {
                    this.updateCustom('showRightPanel', val)
                    this.$store.dispatch('settings/changeSetting', {
                        key: 'showRightPanel',
                        value: val
                    });
                }
            },

        },
        watch: {
            $route() {
                if ( this.isEnableRememberCustom) {
                    this.checkCollections();
                }
            }
        },
        methods: {
            updateCustom (input, value) {
                this.custom[input] = value
            },
            async saveCustom() {
                if (this.storageName !== 'Custom' ) {
                    delete this.custom.textSmBody;
                }
                await this.$store.dispatch('storage/AddStorage', {
                    name: this.storageName,
                    val: this.custom
                })
                    .then(() => {
                        // if we change textSmBody (body class)
                        if (this.oldTextSmBody !== this.custom.textSmBody) {
                            location.reload();
                        } else {
                            this.$Toaster.success(`SUCCESS - custom set for ${this.rootTabs.noteMenu} is saved successfully !`)
                            this.$Toaster.options = {
                                "closeButton": true,
                            }
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
                if( this.rootTabs.menu && !this.onlyDefault) {
                    this.storageName = this.rootTabs.menu + this.collection
                } else {
                    this.storageName =  this.collection;
                }
                // this.checkStorage()
            }
        },
        created() {
            if ( this.isEnableRememberCustom ) {
                let isStorage = localStorageService.isStorageExist( this.collection );
                if ( !isStorage ) {
                    this.$store.dispatch('storage/AddStorage', {
                        name: this.collection,
                        val: this.custom
                    });
                }
                this.checkCollections()
            }
        }
    }

</script>

