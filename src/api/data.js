import request from '@/utils/request'

export function getData() {
  return request({
    url: `https://eefocus-static.eefcdn.com/promotion/module/data/data.json?t=${(new Date()).getTime()}`,
    method: 'get'
  })
}

export function setData(data) {
  return request({
    method: 'post',
    url: 'https://admin.eefocus.com/api/eef-ads-sys/update',
    data: {data: data}
  })
}