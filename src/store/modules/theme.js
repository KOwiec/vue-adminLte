import variables from '@/styles/variables.scss'
import { localStorageService } from '@/api/services';
const colors = localStorageService.checkStorage('Colors');

/**
 * @type {string} 'dark' or 'light'
 * @description Sidebar visualization style ( dark or light)
 */
const sidebarMode  =  'dark';

const COLORS_DEFAULT = {
    sidebarMode: sidebarMode,
    navBarColor: 'navbar-white navbar-light',
    sidebarColor: `sidebar-${sidebarMode}-primary`,
    logoColor: 'navbar-dark',
    sidebarBg: '',
    //accentColor: '',          // var accent_colors' in ControlSidebarColors' - ( default - not exist in body class)
    //mainBgColor: '',
    //menuIconColor: '',
};

const state =  {
    colors: colors  ?  colors  :  COLORS_DEFAULT ,
    refresh: false,
    // from variables.scss
    customTheme: variables.theme,
    customThemeLight: variables.themeLight,
    rightBg: variables.rightBg,
    sidebarBgDark: variables.sidebarBgDark,
    sidebarBgLight: variables.sidebarBgLight,
    menuIconColor: variables.menuIconColor,
    menuIconSize: variables.menuIconSize,
    mainBgColor: variables.mainBgColor,
    mainBg: variables.mainBg,
    headerBg: variables.headerBg,
    controlSidebarWidth: variables.controlSidebarWidth
}

const actions = {

    removeColors ({ commit }) {
        commit('REMOVE_COLORS')
    },

    changeColors ({ commit }, colors) {
        commit('SET_COLORS', colors);
        commit('REFRESH')
    },

    changeVariables({ commit }, data) {
        commit('CHANGE_VAR', data)
    }
};

const mutations = {
    SET_COLORS: ( state, colors ) => {
        state.colors = colors;
    },

    REMOVE_COLORS: () => {
        state.colors = {};
        state.refresh = false
    },

    REFRESH (state) {
        state.refresh = true
    },

    CHANGE_VAR: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    },
};

export default  {
    namespaced: true,
    state,
    actions,
    mutations
};