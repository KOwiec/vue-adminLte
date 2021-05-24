import defaultSettings from '@/settings'
import { localStorageService } from '@/api/services';

const custom = localStorageService.checkStorage('Custom');

const {
    showRightPanel,
    showSettings,
    showPageTab,
    showColorTab,
    showLayoutTab,
    showSettingsTab,
    showHomeTab,
    closeControlSidebarOutside,
    controlSidebarMode,
    controlSidebarWidthPlus,
    controlSidebarTabs,
    showLoginInfo,
    fixedHeader,
    sidebarToggleBtn,
    sidebarUserPanel,
    sidebarLogo,
    sidebarFooter,
    mainDropdownMenu,
    searchForm,
    msgDropdownMenu,
    noteDropdownMenu,
    userDropdownMenu,
    languagesDrobdownMenu,
    breadcrumb,
    pageHeader,
    screenfull,
    textSmHeader,
    textSmBody,
    textSmSidebar,
    textSmFooter,
    textSmControlSidebar,
    textSmBrand,
    flatSidebar,
    legacySidebar,
    compactSidebar,
    childIndentSidebar,
    noExpandSidebar,
    menuIconsSize,
    accordionStyle,
    collapseHideChild,
    enableRememberColors,
    enableRememberCustom,
    enableRememberComp
    } = defaultSettings;

const state = {
    // settings for Right Panel
    showRightPanel: showRightPanel,

    // settings for Control Sidebar
    showSettings: showSettings,
    showPageTab: showPageTab,
    showColorTab: showColorTab,
    showLayoutTab: showLayoutTab,
    showSettingsTab: showSettingsTab,
    showHomeTab: showHomeTab,
    controlSidebarMode: controlSidebarMode,
    controlSidebarTabs: controlSidebarTabs,
    closeControlSidebarOutside: closeControlSidebarOutside,
    controlSidebarWidthPlus: controlSidebarWidthPlus,

    //  settings for components
    sidebarToggleBtn: sidebarToggleBtn,
    showLoginInfo:  showLoginInfo,
    sidebarLogo:  sidebarLogo,
    sidebarUserPanel:  sidebarUserPanel,
    sidebarFooter: sidebarFooter,
    mainDropdownMenu: mainDropdownMenu,
    searchForm:  searchForm,
    msgDropdownMenu:  msgDropdownMenu,
    noteDropdownMenu:  noteDropdownMenu,
    userDropdownMenu:  userDropdownMenu,
    languagesDrobdownMenu:  languagesDrobdownMenu,
    breadcrumb:  breadcrumb,
    pageHeader:  pageHeader,
    fixedHeader:  fixedHeader,
    screenfull: screenfull,

    // text size in body class - only for default menu,  localStorage 'Custom'
    textSmBody: custom ? custom.textSmBody : textSmBody,

    //  settings for text
    textSmHeader:  textSmHeader,
    textSmSidebar:  textSmSidebar,
    textSmFooter:  textSmFooter,
    textSmControlSidebar: textSmControlSidebar,

    //  settings for sidebar (menu panel)
    flatSidebar:  flatSidebar,
    legacySidebar:  legacySidebar,
    compactSidebar:  compactSidebar,
    childIndentSidebar:  childIndentSidebar,
    noExpandSidebar:  noExpandSidebar,
    textSmBrand:  textSmBrand,
    menuIconsSize: menuIconsSize,
    accordionStyle: accordionStyle,

    collapseHideChild: collapseHideChild,

    // enable save in localStorage
    enableRememberColors: enableRememberColors,
    enableRememberCustom: enableRememberCustom,
    enableRememberComp: enableRememberComp,

};

const actions = {
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data)
    },
    // see: router/permission.js
    isRemember({ commit }) {
        commit('REMEMBER')
    }
};

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    },

    REMEMBER: ( state ) => {
       return ( state.enableRememberColors || state.enableRememberComp || state.enableRememberCustom )
    }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

