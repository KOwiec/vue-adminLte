import config from '@/global'
import axios from 'axios'
import request from '@/utils/request'

// base url for axios in request.js
const baseURL =  config.PRODUCT_PREFIX;
// base url for axios directly
const baseURL2 = config.API_BASE_URL + config.PRODUCT_PREFIX;

const productUrl = {
    all:     `${baseURL}`,
    create:  `${baseURL2}/create`,
    read:    `${baseURL2}/read/`,    // need id
    edit:    `${baseURL2}/edit/`,    // need id
    delete:  `${baseURL2}/delete/`,  // need id,
    simply:  `${baseURL2}/simply`,
};

export const productService = {
    getAll,
    getAllSimply,
    getById,
    create,
    update,
    delete: _delete
};

// get products from mirage by axios in @/utils/request.js (see also role service)

function getAll () {
    return request({
        url: productUrl.all,
        method: 'get'
    })
}

//  get products from mirage by axios (second way)

function getAllSimply (request = {}) {
       return axios.get(productUrl.simply, request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
}

function getById(id) {
    return axios.get(productUrl.read +`${id}`)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error))
}

function create(request = {}) {
       return axios.post(productUrl.create, request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
}

function update(id , request = {}) {
       return axios.put(productUrl.edit +`${id}` , request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
}

function _delete(id) {
       return axios.delete(productUrl.delete +`${id}`)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
}


