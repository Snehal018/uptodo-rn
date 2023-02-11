import axios from 'axios';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(req => {
  return req;
});

export default axiosClient;
