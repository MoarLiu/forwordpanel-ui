import request from '@/utils/request'

export function getPage(data) {
  return request({
    url: '/server/getPage',
    method: 'post',
    data
  })
}

export function getList(data) {
  return request({
    url: '/server/getList',
    method: 'get',
    data
  })
}

export function deleteData(data) {
  return request({
    url: '/server/delete',
    method: 'get',
    params: data
  })
}

export function save(data) {
  return request({
    url: '/server/save',
    method: 'post',
    data
  })
}
