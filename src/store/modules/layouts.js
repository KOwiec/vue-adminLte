// layouts options AdminLTE
// we don't use in this moment
// Hold: 'hold-transition'
// Sidebar: 'main-sidebar'
// ContentFixed: 'content-fixed',

import { hasClass } from '@/utils/document'

const options = {
    LayoutFixed    :  'layout-fixed',
    Boxed          :  'layout-boxed',
    NavFixed       :  'layout-navbar-fixed',
    FooterFixed    :  'layout-footer-fixed',
    TopNav         :  'layout-top-nav',
    SidebarCollapse:  'sidebar-collapse'
};

const state = {
          status: {}
};

const actions = {
    checkLayouts({ commit }) {
        for (var key in options) {
            if (!options.hasOwnProperty(key)) {
                continue;
            }
            console.log(key, options[key]);
            hasClass( document.body, options[key] ) ? commit('LAYOUT_SUCCESS', key) : commit('LAYOUT_FAILURE', key)
        }
    },
    isTopNavigation ( { commit } ) {
         hasClass( document.body, options.TopNav ) ? commit('TOP_NAV_SUCCESS') : commit('TOP_NAV_FAILURE')
    },
    isNavbarFixed ( { commit } ) {
         hasClass( document.body, options.NavFixed ) ? commit('NAV_BAR_FIXED_SUCCESS') : commit('NAV_BAR_FIXED_FAILURE')
    },
    isFooterFixed ( { commit } ) {
         hasClass( document.body, options.FooterFixed ) ? commit('FOOTER_FIXED_SUCCESS') : commit('FOOTER_FIXED_FAILURE')
    },
    isSidebarCollapse (  { commit } ) {
         hasClass( document.body, options.SidebarCollapse ) ? commit('SIDEBAR_COLLAPSE_SUCCESS') : commit('SIDEBAR_COLLAPSE_FAILURE')
    }
};

const mutations = {

    LAYOUT_SUCCESS: ( state, key ) => {
        state.status[key] = true
    },

    LAYOUT_FAILURE: ( state, key ) => {
        state.status[key] = false
    },

    TOP_NAV_SUCCESS: ( state ) => {
        state.status = { ...state.status, TopNav: true };
    },

    TOP_NAV_FAILURE: ( state ) => {
        state.status = { ...state.status, TopNav: false };
    },

    NAV_BAR_FIXED_SUCCESS: ( state ) => {
        state.status = { ...state.status, NavFixed: true };
    },

    NAV_BAR_FIXED_FAILURE: ( state ) => {
        state.status = { ...state.status, NavFixed: false };
    },

    SIDEBAR_COLLAPSE_SUCCESS: ( state ) => {
        state.status = { ...state.status, SidebarCollapse: true };
    },

    SIDEBAR_COLLAPSE_FAILURE: ( state ) => {
        state.status = { ...state.status, SidebarCollapse: false };
    },

    FOOTER_FIXED_SUCCESS: ( state ) => {
        state.status = { ...state.status, FooterFixed: true };
    },

    FOOTER_FIXED_FAILURE: ( state ) => {
        state.status = { ...state.status, FooterFixed: false };
    },

    CLEAR: ( state ) => {
        state.status = {};
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

