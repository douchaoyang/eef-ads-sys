import request from '@/utils/request'

export function getData() {
  return request({
    url: `https://eefocus-static.eefcdn.com/promotion/module/data/data.json?t=${(new Date()).getTime()}`,
    method: 'get'
  })
}

export function setData(data) {
  return request({
    method: 'get',
    url: 'https://admin.eefocus.com/api/current-user',
    data: {data: data}
  })
}