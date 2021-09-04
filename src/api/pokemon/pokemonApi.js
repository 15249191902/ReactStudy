import commonRequest from '../axios.js'
export const getPokemonListApi = (data = {}) => {
  return commonRequest({
    method: 'post',
    url: "/pokemon/getPokemonList",
    data
  })
}
