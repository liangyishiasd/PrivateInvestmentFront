import request from '@/utils/request'

const patientApi = {
  list: '/patient/list'
}

export default patientApi

export function getPatientList (parameter) {
  return request({
    url: patientApi.list,
    method: 'post',
    params: parameter
  })
}
