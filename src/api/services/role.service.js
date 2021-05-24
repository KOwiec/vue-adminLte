import request from '@/utils/request'
import config from '@/global'

const baseURL = config.ROLE_PREFIX

const roleUrl = {
    roles:   `${baseURL}`,
    routes:  `${baseURL}/routes`,
    create:  `${baseURL}/create`,
    read:    `${baseURL}/`,         // need id
    edit:    `${baseURL}/edit/`,    // need id
    delete:  `${baseURL}/`,         // need id,
};

export const roleService = {
    getAll,
    getRoutes,
    create,
    update,
    delete: _delete
};

function getAll() {
  return request({
    url: roleUrl.roles,
    method: 'get'
  })
}

function getRoutes() {
    return request({
        url: roleUrl.routes,
        method: 'get'
    })
}

function create(data) {
  return request({
    url: roleUrl.create,
    method: 'post',
    data
  })
}

function update(id, data) {
  return request({
    url: roleUrl.edit +`${id}`,
    method: 'put',
    data
  })
}

function _delete(id) {
  return request({
    url: roleUrl.delete +`${id}`,
    method: 'delete'
  })
}
