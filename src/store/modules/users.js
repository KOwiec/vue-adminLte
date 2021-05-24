import { userService } from '@/api/services';

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('GET_ALL_REQUEST');
        return new Promise((resolve, reject) => {
            userService.getAll()
             .then(
                 users => {
                     commit('GET_ALL_SUCCESS', users);
                     resolve();
                 })
             .catch(
                 error => {
                     commit('GET_ALL_FAILURE', error);
                     reject(error)
             })
        })
    },

    delete({ commit }, id) {
        commit('DELETE_REQUEST', id);
        return new Promise((resolve, reject) => {
            userService.delete(id)
                .then(
                    user => {
                        commit('DELETE_SUCCESS', id);
                        resolve();
                    })
                .catch(
                    error => {
                        commit('DELETE_FAILURE', { id, error: error.toString() });
                        reject(error)
                })
        })

    },

    update({ commit }, user) {
        commit('UPDATE_REQUEST', user.id);
        return new Promise((resolve, reject) => {
            userService.update(user)
                .then(
                    user => {
                        commit('UPDATE_SUCCESS', user);
                        resolve();
                    })
                .catch(
                    error => {
                        commit('UPDATE_FAILURE', { user, error: error.toString() });
                        reject(error)
                })
        })

    },

    getById({ commit }, id) {
        commit('GET_BY_ID_REQUEST');
        return new Promise((resolve, reject) => {
            userService.getById(id)
                .then(
                    user => {
                        commit('GET_BY_ID_SUCCESS', user);
                        resolve();
                    })
                .catch(
                    error => {
                        commit('GET_BY_ID_FAILURE', {  error: error.toString() });
                        reject(error)
                })
        })

    }
};

const mutations = {
    GET_ALL_REQUEST: (state) => {
        state.all = { loadingAll: true };
    },
    GET_ALL_SUCCESS: (state, users) => {
        state.all = { items: users };
    },
    GET_ALL_FAILURE: (state, error) => {
        state.all = { error };
    },
    //----------------------------------
    GET_BY_ID_REQUEST: (state ) => {
        state.all = { loadingUser: true };
    },
    GET_BY_ID_SUCCESS: (state, user) => {
        state.all = { items: user };
    },
    GET_BY_ID_FAILURE: (state, error) => {
        state.all = { error };
    },
    //------------------------------------
    DELETE_REQUEST: (state, id) => {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    DELETE_SUCCESS: (state, id) => {
        // remove deleted user from state
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    DELETE_FAILURE: (state, { id, error }) => {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        state.all.items = state.all.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    },
    //------------------------------------
    UPDATE_REQUEST: (state, id) => {
        // add 'updating:true' property to user being updating
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, updating: true }
                : user
        )
    },
    UPDATE_SUCCESS: (state, newUser) => {
        // update user from state
        state.all.items = state.all.items.map(user =>
            user.id === newUser.id && user.updating === true
                ? { ...newUser }
                : user
        )
    },
    UPDATE_FAILURE: (state, { newUser, error }) => {
        // remove 'updating:true' property and add 'deleteError:[error]' property to user
        state.all.items = state.all.items.map(user => {
            if (user.id === newUser.id) {
                // make copy of user without 'updating:true' property
                const { updating, ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
