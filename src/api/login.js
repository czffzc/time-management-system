import request from '@/utils/request'

export function login(params) {
    return request({
      baseURL: 'http://localhost:3001/api',
      url: '/login',
      method: 'get',
      params: params
    })
  }