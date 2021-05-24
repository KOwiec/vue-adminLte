import { handleResponse, requestOptions } from '@/utils/fetch-request'
import config from '@/global';

const baseURL = config.API_BASE_URL + config.USER_PREFIX;
const userUrl = {
  all:      `${baseURL}`,
  register: `${baseURL}/register`, // create
  read:     `${baseURL}/`,         // need id
  edit:     `${baseURL}/edit/`,    // need id
  delete:   `${baseURL}/`,         // need id,
};

export const userService = {
    getAll,
    getById,
    register,
    update,
    delete: _delete
};

// demo
function getAll() {
    let request = new Request(userUrl.all, requestOptions.get());

    return fetch(request)
        .then(response => {
            //console.log(response.type);
            //console.log(response.url);
            //console.log(response.status);
            //console.log(response.ok);
            //console.log(response.statusText);
            //console.log(response.headers);
            //if (!response.ok) {
            // throw new Error("HTTP error, status = " + response.status);
            //}
            return response.json()
        })
        .then(handleResponse)
}

function getById(id) {
    let request = new Request(userUrl.read +`${id}`, requestOptions.get());

    return fetch(request)
        .then(response => response.json())
        .then(handleResponse)
}

// create user
function register(user) {
    let request = new Request(userUrl.register, requestOptions.post(user));

    return fetch(request)
        .then(response => response.json())
        .then(handleResponse)
}

function update(user) {
    let request = new Request(userUrl.edit +`${user.id}`, requestOptions.patch(user));

    return fetch(request)
        .then(response => response.json())
        .then(handleResponse)
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    let request = new Request(userUrl.delete +`${id}`, requestOptions.delete());

    return fetch(request)
        .then(response => response.json())
        .then(handleResponse)
}