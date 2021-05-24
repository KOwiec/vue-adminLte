import { productService } from '@/api/services';

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('GET_ALL_REQUEST');
        productService.getAll()
            .then(
                response => commit('GET_ALL_SUCCESS', response.data),
                error => commit('GET_ALL_FAILURE', error)
            );
    },
    getAllSimply({ commit }) {
        commit('GET_ALL_REQUEST');
        productService.getAllSimply()
            .then(
                response => commit('GET_ALL_SUCCESS', response.data),
                error => commit('GET_ALL_FAILURE', error)
            );
    },
};

const mutations = {
    GET_ALL_REQUEST: (state) => {
        state.all = { loading: true };
    },
    GET_ALL_SUCCESS: (state, products) => {
        state.all = { items: products };
    },
    GET_ALL_FAILURE: (state, error) => {
        state.all = { error };
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}