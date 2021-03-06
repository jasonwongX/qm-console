import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/project/agileProcess/list',
    method: 'get',
    params: query
  })
}

export function fetchAgileProcess(id) {
  return request({
    url: '/project/agileProcess/info',
    method: 'get',
    params: { id }
  })
}
export function addAgileProcess(data) {
  return request({
    url: '/project/agileProcess/add',
    method: 'post',
    params: data
  })
}

export function editAgileProcess(data) {
  return request({
    url: '/project/agileProcess/modify',
    method: 'post',
    params: data
  })
}
export function deleteAgileProcess(id) {
  return request({
    url: '/project/agileProcess/delete',
    method: 'post',
    params: { id }
  })
}
