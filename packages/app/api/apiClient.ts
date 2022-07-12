import axios from 'axios'
import storage from '../storage'

const instance = axios.create({
  baseURL: 'https://dev.truefans.in',
})

const setAuthorizationHeader = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
const getToken = async () => {
  const token = await storage
    .load({
      key: 'loginState',
    })
    .then((res) => {
      return res.authToken
    })
    .catch((err) => {
      console.warn(err.message)
      switch (err.name) {
        case 'NotFoundError':
          // TODO;
          break
        case 'ExpiredError':
          // TODO
          break
      }
    })
  if (token) setAuthorizationHeader(token)
}
getToken()

// instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNDQxNDg2IiwiaWF0IjoxNjU0NzYzODgzLCJleHAiOjE2NTk5NDc4ODN9.wNpmNw93IRmt227qSKtgEy8-2U84EqfuwcblSmH_TvH7_Gd9BD3zl5ZkwpwDha41hpFRlgFjCUZjkkXrzsQLYw';

instance.interceptors.request.use((request) => {
  request.headers.app_version_code = 114
  // request.headers.Authorization = 'bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNzcyMjQ4IiwiaWF0IjoxNjU2NTc2MzE3LCJleHAiOjE2NjE3NjAzMTd9.GNC9Z7sT9PLXEx1qgTpMAprfgFjO2ud4vvnB27LzCbengc2H-AG55mzwZ1BWo4XCgWegR_S47-70PsFD7tqCpQ';
  request.headers.app_version_name = 2
  request.headers.os_type = 'web'
  return request
})

export default instance
