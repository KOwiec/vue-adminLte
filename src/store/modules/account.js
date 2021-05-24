import { authenticationService, userService } from '@/api/services';
import { setToken, getToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router';

const state = {
    status: {},
    user: {},
    token: getToken(),
    roles: []
};

const actions = {

    login({ dispatch, commit }, { username, password }) {
        commit('LOGIN_REQUEST');
        return new Promise((resolve, reject) => {
            authenticationService.login(username, password)
              .then(
                  data => {
                      commit('SET_TOKEN', data.token);
                      setToken(data.token);
                      commit('LOGIN_SUCCESS');
                      //console.log('login status: ' + state.status.loggedIn);
                      resolve();
                  })
              .catch(
                  error => {
                  commit('LOGIN_FAILURE', error);
                  dispatch('alert/error', 'Login ' +error , { root: true });
                  reject(error)
              })
        })
    },

    logout({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            let token = getToken();
            authenticationService.logout(token)
                .then(
                    () => {
                        commit('LOGOUT');
                        //console.log('logout status: ' + state.status.logOut);
                        commit('SET_TOKEN', '');
                        commit('SET_ROLES', [])
                        removeToken();
                        resetRouter();
                        resolve();
                    })
                .catch(
                    error => {
                    commit('LOGOUT_FAILURE', error);
                    dispatch('alert/error', 'Logout ' +error, { root: true });
                    reject(error)
                })
        })
    },

    register({ dispatch, commit }, user) {
        commit('REGISTER_REQUEST', user);
        return new Promise((resolve, reject) => {
            userService.register(user)
                .then(
                    user => {
                        commit('REGISTER_SUCCESS', user);
                        //console.log('registered: ' + state.status.registered);
                        setTimeout(() => {
                            // display success message after route change completes
                            dispatch('alert/success',  'Registration successful', { root: true });
                        });
                        resolve()
                    })
                .catch(
                    error => {
                        commit('REGISTER_FAILURE', error);
                        dispatch('alert/error', 'Registration ' +error, { root: true });
                        reject(error)
                    })
        })
    },

    // get user details by token see: @/router/permission.js
    getInfo({ dispatch, commit, state }) {
        return new Promise((resolve, reject) => {
            authenticationService.getInfo(state.token)
                .then(
                    user => {
                        const userRoles = user.roles;
                        // roles must be a non-empty array
                        if ( !userRoles ||  userRoles.length <= 0 ) {
                            reject('getInfo: roles must be a non-null array!')
                        }
                        commit('SET_ROLES',  userRoles);
                        const { roles, ...userInfo } = user;
                        commit('INFO_SUCCESS', userInfo);
                        resolve(user)
                    })
                .catch(
                    error => {
                    commit('INFO_FAILURE', error);
                    dispatch('alert/error', 'User Info by token ' +error, { root: true });
                    reject(error)
                })
        })
    },

    //  remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', [])
            removeToken();
            resolve()
        })
    },

    // dynamically modify permissions
    changeRoles({ commit, dispatch }, role) {
        return new Promise(async resolve => {

            let token = getToken();
            token = token+ '.' +role;
            commit('SET_TOKEN', token)

            const { roles } = await dispatch('getInfo')

            resetRouter();

            // generate accessible routes map based on roles
            const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

            // dynamically add accessible routes
            router.addRoutes(accessRoutes)

            resolve()
        })
    }
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    //------------------------------

    INFO_SUCCESS: (state, user) => {
        state.status = { UserInfo: true };
        state.user = user;
    },
    INFO_FAILURE: (state) => {
        state.status = { UserInfoError: true };
        state.user = {};
    },
    //-------------------------------
    LOGIN_REQUEST: (state) => {
        state.status = { loggingIn: true };
        //state.user = user;
    },

    LOGIN_SUCCESS: (state) => {
        state.status = { loggedIn: true };
        //state.user = user;
    },
    LOGIN_FAILURE: (state, error) => {
        state.status = { loginError: true };
        state.user = {};
        state.token = ''
    },
    //--------------------------------

    LOGOUT: (state) => {
        state.status = { logOut: true };
        state.user = {};
    },
    LOGOUT_FAILURE: (state, error) => {
        state.status = { logoutError: true};
    },
//--------------------------------
    REGISTER_REQUEST: (state, user) => {
        state.status = { registering: true };
    },

    REGISTER_SUCCESS: (state, user) => {
        state.status = { registered: true };
    },
    REGISTER_FAILURE: (state, error) => {
        state.status = { registerError: true };
    }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations

}

