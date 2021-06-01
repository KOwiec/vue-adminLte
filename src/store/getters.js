const getters = {
  // authorization
    isloggingIn: state => state.account.status.loggingIn,
    isLoggedIn: state => state.account.status.loggedIn,
    isLoginError: state => state.account.status.loginError,
    isLogout: state => state.account.status.logOut,
    isRegistering: state => state.account.status.registering,
    isRegistered: state => state.account.status.registered,
    isRegisterError: state => state.account.status.registerError,
    token: state => state.account.token,
    roles: state => state.account.roles,
    user: state => state.account.user,
  // permission
    permission_routes: state => state.permission.routes,
  // users
    users: state => state.users.all.items,
    testUser: state => state.testUser.main,
  // errors logs
    errorLogs: state => state.errorLog.logs,
  // layouts
    layout: state => state.layouts.status,
  // theme
    colors: state => state.theme.colors,
    headerBg: state => state.theme.headerBg,
    refresh: state => state.theme.refresh,
  // storage
    storage: state => state.storage.all.map(s => s.name),
  // application
    sidebar: state => state.app.sidebar,
    controlSidebar: state => state.app.controlSidebar,
    language: state => state.app.language,
    size: state => state.app.size,
  // alert
    alertSimple: state => state.alert,
  // All notifications, we are returning only the raw notification objects
    notifications: state => state.notifications.all.map(n => n.Raw),
  // api
    Products: state => state.products.all,
  //  control-sidebar
    showSettings: state => state.settings.showSettings,
    showPageTab: state => state.settings.showPageTab,
    showColorTab: state => state.settings.showColorTab,
    showLayoutTab: state => state.settings.showLayoutTab,
    showSettingsTab: state => state.settings.showSettingsTab,
    showHomeTab: state => state.settings.showHomeTab,
    controlSidebarMode: state => state.settings.controlSidebarMode,
    closeOutside: state => state.settings.closeControlSidebarOutside,
    controlSidebarTabs: state => state.settings.controlSidebarTabs,
    controlSidebarWidthPlus: state => state.settings.controlSidebarWidthPlus,
  //  components
    sidebarToggleBtn: state => state.settings.sidebarToggleBtn,
    showLoginInfo: state => state.settings.showLoginInfo,
    showMainDropdownMenu: state => state.settings.mainDropdownMenu,
    showSearchForm: state => state.settings.searchForm,
    showMsgDropdownMenu: state => state.settings.msgDropdownMenu,
    showNoteDropdownMenu: state => state.settings.noteDropdownMenu,
    showUserDropdownMenu: state => state.settings.userDropdownMenu,
    showlanguagesDrobdownMenu: state => state.settings.languagesDrobdownMenu,
    showBreadcrumb:  state => state.settings.breadcrumb,
    showPageHeader:  state => state.settings.pageHeader,
    fixedHeader: state => state.settings.fixedHeader,
    screenfull: state => state.settings.screenfull,
  //  text
    textSmHeader: state => state.settings.textSmHeader,
    textSmBody: state => state.settings.textSmBody,
    textSmSidebar: state => state.settings.textSmSidebar,
    textSmFooter: state => state.settings.textSmFooter,
    textSmBrand: state => state.settings.textSmBrand,
    textSmControlSidebar: state => state.settings.textSmControlSidebar,
  //   sidebar
    sidebarMode: state => state.settings.sidebarMode,
    flatSidebar: state => state.settings.flatSidebar,
    legacySidebar: state => state.settings.legacySidebar,
    compactSidebar: state => state.settings.compactSidebar,
    childIndentSidebar: state => state.settings.childIndentSidebar,
    noExpandSidebar: state => state.settings.noExpandSidebar,
    menuIconsSize: state => state.settings.menuIconsSize,
    accordionStyle: state => state.settings.accordionStyle,
    collapseHideChild: state => state.settings.collapseHideChild,
  //  right panel
    showRightPanel: state => state.settings.showRightPanel,
  //  enable save
    enableRememberColors: state => state.settings.enableRememberColors,
    enableRememberCustom: state => state.settings.enableRememberCustom,
    enableRememberComp: state => state.settings.enableRememberComp,
};
export default getters
