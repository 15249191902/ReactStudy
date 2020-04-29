import axios from 'axios'
function getRequest (option) {
  const instance = axios.create();
  return instance(option)
}
export default getRequest