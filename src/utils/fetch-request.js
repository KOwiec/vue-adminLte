import { localStorageService } from '@/api/services';
import { getToken } from '@/utils/auth'
import store from '@/store'

export const requestOptions = {
    get() {
        return {
            method: 'GET',
            ...headers()
        };
    },
    post(body) {
        return {
            method: 'POST',
            ...headers(),
            body: JSON.stringify(body)
        };
    },
    patch(body) {
        return {
            method: 'PATCH',
            ...headers(),
            body: JSON.stringify(body)
        };
    },
    put(body) {
        return {
            method: 'PUT',
            ...headers(),
            body: JSON.stringify(body)
        };
    },
    delete() {
        return {
            method: 'DELETE',
            ...headers()
        };
    }
}

function headers() {
    const authHeader = store.getters.token ? { 'Authorization': 'Bearer ' + getToken() } : {}
    return {
        headers: {
            ...authHeader,
            'Content-Type': 'application/json'
        }
    }
}

export function handleResponse(response) {
    // flag or code like - (response.code !== 20000)
    if (!response.ok) {
        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        if ([50008, 50012, 50014].indexOf(response.code) !== -1) {
            // auto logout
            store.dispatch('account/resetToken').then(() => {
                localStorageService.removeFromStorage('currentUser');
                location.reload(true);
            })
        }
        return Promise.reject(new Error(response.message || 'code ' + response.code));
    }
    const data = response.data;
    if(data) return data;
    return Promise.reject(new Error('Data error'));
}