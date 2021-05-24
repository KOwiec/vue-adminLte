import Cookies from 'js-cookie'

const SIDEBAR = 'sidebarStatus' ;
const CONTROL_SIDEBAR = 'controlSidebarStatus';
const ACTIVE_TAB = 'controlSidebarTabActive';
const RIGHT_PANEL = 'rightPanelStatus';

const state = {
  sidebar: {
      opened: Cookies.get(SIDEBAR) ? !!+Cookies.get(SIDEBAR) : true
  },
  controlSidebar: {
      opened: Cookies.get(CONTROL_SIDEBAR) ? !!+Cookies.get(CONTROL_SIDEBAR) : false,
      activeTab: Cookies.get(ACTIVE_TAB),
  },
  rightPanel: {
      opened: Cookies.get(RIGHT_PANEL) ? !!+Cookies.get(RIGHT_PANEL) : false,
  }
};

const actions = {
    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },

    closeSidebar({ commit }) {
        commit('CLOSE_SIDEBAR')
    },

    openSidebar({ commit }) {
        commit('OPEN_SIDEBAR')
    },

    toggleControlSidebar({ commit }) {
        commit('TOGGLE_CONTROL_SIDEBAR')
    },

    closeControlSidebar({ commit }) {
        commit('CLOSE_CONTROL_SIDEBAR')
    },

    openControlSidebar({ commit }) {
        commit('OPEN_CONTROL_SIDEBAR')
    },

    toggleTabActive({ commit }, id) {
        commit('TOGGLE_TAB_ACTIVE', id)
    },

    toggleRightPanel({ commit }) {
        commit('TOGGLE_RIGHT_PANEL')
    },

    closeRightPanel({ commit }) {
        commit('CLOSE_RIGHT_PANEL')
    },

    openRightPanel({ commit }) {
        commit('OPEN_RIGHT_PANEL')
    }
};

const mutations = {
    TOGGLE_SIDEBAR: state => {
       state.sidebar.opened = !state.sidebar.opened;
       if (state.sidebar.opened) {
          Cookies.set(SIDEBAR, 1, { sameSite: 'strict' })
       } else {
          Cookies.set(SIDEBAR, 0, { sameSite: 'strict' })
       }
    },

    CLOSE_SIDEBAR: (state) => {
        Cookies.set(SIDEBAR, 0, { sameSite: 'strict' });
        state.sidebar.opened = false
    },

    OPEN_SIDEBAR: (state) => {
        Cookies.set(SIDEBAR, 1, { sameSite: 'strict' });
        state.sidebar.opened = true
    },

    TOGGLE_CONTROL_SIDEBAR : state => {
        state.controlSidebar.opened = !state.controlSidebar.opened;
          if (state.controlSidebar.opened) {
              Cookies.set(CONTROL_SIDEBAR, 1, { sameSite: 'strict' })
          } else {
              Cookies.set(CONTROL_SIDEBAR, 0, { sameSite: 'strict' })
        }
    },

    CLOSE_CONTROL_SIDEBAR : state => {
        Cookies.set(CONTROL_SIDEBAR, 0, { sameSite: 'strict' });
        state.controlSidebar.opened = false
    },

    OPEN_CONTROL_SIDEBAR : state => {
        Cookies.set(CONTROL_SIDEBAR, 1, { sameSite: 'strict' });
        state.controlSidebar.opened = true
    },

    TOGGLE_TAB_ACTIVE : (state, id) => {
       if (state.controlSidebar.opened) {
            Cookies.set(ACTIVE_TAB, id, { sameSite: 'strict' })
            state.activeTab = id
      }
    },

    TOGGLE_RIGHT_PANEL : state => {
         state.rightPanel.opened = !state.rightPanel.opened;
         if (state.rightPanel.opened) {
             Cookies.set(RIGHT_PANEL, 1, { sameSite: 'strict' })
         } else {
             Cookies.set(RIGHT_PANEL, 0, { sameSite: 'strict' })
         }
    },

    CLOSE_RIGHT_PANEL : state => {
        Cookies.set(RIGHT_PANEL, 0, { sameSite: 'strict' });
        state.rightPanel.opened = false
    },

    OPEN_RIGHT_PANEL : state => {
        Cookies.set(RIGHT_PANEL, 1, { sameSite: 'strict' });
        state.rightPanel.opened = true
    }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
