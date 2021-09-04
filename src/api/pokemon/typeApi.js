import commonRequest from '../axios.js'
export const getTypeApi = (data = {}) => {
  return commonRequest({
    method: 'post',
    url: "/type/getTypeList",
    data
  })
}
export const addType = (data = {}) => {
  return commonRequest({
    method: 'post',
    url: "/type/addType",
    data
  })
}
export const findByPropertyAndColorApi = (data = {}) => {
  return commonRequest({
    method: 'post',
    url: "/type/findByPropertyAndColor",
    data
  })
}
export const findByMapApi = (data = {}) => {
  return commonRequest({
    method: 'post',
    url: "/type/findByMap",
    data
  })
}
export const findReturnMapApi = (data = {}) => {
  return commonRequest({
    method: 'post',
    url: "/type/findReturnMap",
    data
  })
}
export const findTypeAndPokemonsByPropertyApi = (data = {}) => {
  return commonRequest({
    method: 'post',
    url: "/type/findTypeAndPokemonsByProperty",
    data
  })
}
