import axios from 'axios';
// import env from '~/env_variable';

const config = {
  baseURL: 'http://127.0.0.1:20010/api',
  // withCredentials: true,  // 跨域
};

const instance = axios.create(config);

// 拦截器
instance.interceptors.response.use((response) => {

  if (response.status === 200) {
    return response.data;
  } else {
    return response;
  }

});

export default instance;
