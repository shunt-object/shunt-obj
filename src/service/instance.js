import axios from 'axios'
import qs from 'qs'
//import utils from '@/utils'

const instance = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASEURL,
  timeout: 5000,
  transformRequest: [data => qs.stringify(data, { arrayFormat: 'repeat' })]
})

instance.defaults.withCredentials = true
instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
//请求头
instance.interceptors.request.use(function (config) {
  //获取token
  //let token = utils.localStorage.getToken(token)
  //请求头里设置token，或者用户信息
  //config.headers.common['token'] = token
  return config;
}, function (error) {
  return Promise.reject(error);
});
//相应
instance.interceptors.response.use(function (response) {
  let token = response.headers.token
  if (token) {
    //utils.localStorage.saveToken(token)
  }
  let data = response.data
  if (!data) {
    return Promise.reject(new Error('后台接口错误！'))
  } else if (data.code !== 0) {
    //默认code为0 请求成功，
    return Promise.reject(new Error(data.msg))
  }
  return data.content;
}, function (error) {
  return Promise.reject(error);
});

export default instance

