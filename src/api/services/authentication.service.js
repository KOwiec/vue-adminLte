import { localStorageService } from '@/api/services';
import { requestOptions, handleResponse } from '@/utils/fetch-request'
import config from '@/global';

const baseURL = config.API_BASE_URL + config.USER_PREFIX;
const authUrl = {
    login:    `${baseURL}/authenticate`,
    logout:   `${baseURL}/logout`,
    info:     `${baseURL}/info/`  // need token
};

export const authenticationService = {
    login,
    logout,
    getInfo
};

function login(username, password) {

    return fetch(authUrl.login,  requestOptions.post({ username, password }))
        .then(response => response.json())
        .then(handleResponse)
}

function logout(token) {

    return fetch(authUrl.logout, requestOptions.post({ token }))
        .then(response => response.json())
        .then(handleResponse)
}

function getInfo(token) {

    return fetch(authUrl.info +`${token}` , requestOptions.get())
        .then(response => response.json())
        .then(handleResponse)

}