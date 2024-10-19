import request from '@/utils/request'

const medApi = {
  list: '/med/list'
}

export default medApi

export function getMedList (parameter) {
  return request({
    url: medApi.list,
    method: 'get',
    data: parameter
  })
}
