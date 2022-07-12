import axios from './apiClient'
import storage from '../storage';

export const userLogin = async (loginData) => {
  const { data } = await axios.post(`/security/api/auth/user/user-login-v2`, {
    mobileNumber: loginData.mobileNumber,
  })
  console.log(data.authToken);
  storage.save({
    key: 'loginState', // Note: Do not use underscore("_") in key!
    data,
    expires: null
  });
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.authToken}`;
}
