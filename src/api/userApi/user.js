import axios from '../axios.js'
export const getUserData = data => {
  return axios({
    method: 'post',
    url: "/users/getUser",
  })
}
