import {commonRequest} from '../axios.js'
export const getUserByPage = data => {
  return commonRequest({
    method: 'post',
    url: "/users/getUserByPage",
    data
  })
}
export const getUserData1 = data => {
  return commonRequest({
    method: 'post',
    url: "/users/getUser1",
    data
  })
}
