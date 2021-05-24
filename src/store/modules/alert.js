const state = {
    type: null,
    message: null
};

const actions = {
    success({ commit }, message) {
        commit('SUCCESS', message);
    },
    error({ commit }, message) {
        commit('ERROR', message);
    },
    info({ commit }, message) {
        commit('INFO', message);
    },
    clear({ commit }) {
        commit('CLEAR');
    }
};

const mutations = {
    SUCCESS: (state, message) => {
        state.type = 'success';
        state.message = message;
    },
    ERROR: (state, message) => {
        state.type = 'danger';
        state.message = message;
    },
    INFO: (state, message) => {
        state.type = 'INFO';
        state.message = message;
    },
    CLEAR: (state) => {
        state.type = null;
        state.message = null;
    }
};

export default  {
    namespaced: true,
    state,
    actions,
    mutations
};