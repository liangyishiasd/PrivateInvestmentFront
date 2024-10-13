import request from '@/utils/request'

const patientApi = {
  list: '/patient/list'
}

export default patientApi

export function getPatientList (parameter) {
  return request({
    url: patientApi.list,
    method: 'post',
    headers: {
      'Content-Type': 'application/json' // 设置请求头为 JSON
    },
    data: parameter
  })
}
