import Cookies from 'js-cookie'

const TOKEN_KEY = 'vue_admin_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export function getToken() {
    return Cookies.get(TOKEN_KEY)
}

export function setToken(token) {
    return Cookies.set(TOKEN_KEY, token, { secure: true } )
}

export function removeToken() {
    return Cookies.remove(TOKEN_KEY)
}

export function  getRefreshToken() {
    return Cookies.get(REFRESH_TOKEN_KEY)
}

export function setRefreshToken(token) {
    return Cookies.set(REFRESH_TOKEN_KEY, token)
}

export function removeRefreshToken() {
    return Cookies.remove(REFRESH_TOKEN_KEY)
}

