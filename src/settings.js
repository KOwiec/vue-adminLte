
module.exports = {

  title: 'Vue-AdminLTE',

  /**
   * @type {boolean} true | false
   * @description Whether show the control-sidebar
   */
  showSettings: true,

    /**
     * @type {boolean} true | false
     * @description Whether show the right panel
     */
  showRightPanel: true,

    /**
     * @type {boolean} true | false
     * @description Whether show tabs in control-sidebar for settings content pages, color , layout, components, home (custom) settings
     */
  showPageTab: true,
  showColorTab: true,
  showLayoutTab: true,
  showSettingsTab: true,
  showHomeTab: true,

    /**
     * @type {boolean} true | false
     * @description Whether close control-sidebar outside it (by click in content page area)
     */
  closeControlSidebarOutside: true,

    /**
     * @type {string} 'dark' or 'light'
     * @description control-sidebar  visualization style ( dark or light)
     */
  controlSidebarMode:  'dark',

    /**
     * @type {string} 'pills' or 'tabs'
     * @description control-sidebar  tabs style ( pills or tabs)
     */
    controlSidebarTabs:  'pills',
    /**
     * @type {boolean} true | false
     * @description control-sidebar  change width on custom (see: /styles/variables.scss)
     */
  controlSidebarWidthPlus:  false,

  /**
  * @type {boolean} true | false
  * @description Whether show the info in Login Page
  */
  showLoginInfo: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo & User Panel & footer with block of buttons in sidebar
   */
  sidebarLogo: true,
  sidebarUserPanel: true,
  sidebarFooter: true,

    /**
     * @type {boolean} true | false
     * @description Whether show SidebarToggle, MainDropdownMenu, SearchForm, MessagesDropdownMenu, NotificationsDropdownMenu,
     *  UserDropdownMenu, languagesDrobdownMenu, screenfull  components in Navi bar
     */
    sidebarToggleBtn: true,
    mainDropdownMenu: true,
    searchForm: true,
    msgDropdownMenu: true,
    noteDropdownMenu: true,
    userDropdownMenu: true,
    languagesDrobdownMenu: false,
    screenfull: true,

    /**
     * @type {boolean} true | false
     * @description Whether show the Bredcrumb components in Navi bar (false) or in Content Header (true)
     */
    breadcrumb: false,

    /**
     * @type {boolean} true | false
     * @description Whether show the Header components in content section
     */
    pageHeader: true,

    /**
     * @type {boolean} true | false
     * @description Whether show Navbar border
     */
    fixedHeader: true,

    /***
     * @type {boolean} true | false
     * @description Whether show Body small text (body class)
     */
    textSmBody: false,

    /***
     * @type {boolean} true | false
     * @description Whether show Navbar, Sidebar, Footer, and Control Sidebar  small text
     */
    textSmHeader: false,
    textSmSidebar: false,
    textSmFooter: false,
    textSmControlSidebar: false,

    /***
     * @type {boolean} true | false
     * @description Whether show Sidebar flat style, legacy style, compact style, child indent, disable hover/focus auto expand
     *  show Brand logo small text,
     *  change menu icons size on custom (data: @/styles/variables.scss),
     *  change accordion style open/close submenu
     */
    flatSidebar: false,
    legacySidebar: false,
    compactSidebar: false,
    childIndentSidebar: true,
    noExpandSidebar: false,
    textSmBrand: false,
    menuIconsSize: false,

    /***
     * @type {boolean} true | false
     * @description change accordion style open/close submenu
     * default - false, we don't use adminlte see:
     *
     */
    accordionStyle: false,

    /***
     * @type {boolean} true | false
     * @description hide open submenu if collapse sidebar
     *
     */
    collapseHideChild: true,

    /***
     * @type {boolean} true | false
     * @description Whether remember in localStore 'colors / skins', text, sidebar, control-sidebar setting , components settings (show or not)'
     * see: @/layout/components/ControlSidebar/ControlSidebarColors, ControlSidebarLayout, ControlSidebarSettings & @/store/modules/theme
     */
    enableRememberColors: true,
    enableRememberCustom: true,
    enableRememberComp: true,

    /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: ['production', 'development'],

};
