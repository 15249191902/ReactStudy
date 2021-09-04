import axios from 'axios'
export default  (option = {}) => {
  // 创建一个实例
  const instance = axios.create();
  // 请求拦截器
  instance.interceptors.request.use(function (config) {
    // console.log("axios拦截器")
    // console.log(config);
    return config;
  },function (error){
    return Promise.reject(error);
  })
  // 响应拦截器
  instance.interceptors.response.use(function (response) {
    // console.log("axios响应拦截")
    // console.log(response)
    let {data, status, statusText} = response
    let rData ={data,status,statusText}
    return rData
  },function (error){
    return Promise.reject(error)
  })
  return instance(option)
}