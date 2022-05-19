import request from '@/utils/request'

export function getData() {
  return request({
    url: `http://qiniu.douchaoyang.com/test/data.json?t=${(new Date()).getTime()}`,
    method: 'get'
  })
}

export function setData(data) {
  return request({
    method: 'post',
    url: 'http://127.0.0.1:8081/qiniu/data',
    data: {data: data}
  })
}