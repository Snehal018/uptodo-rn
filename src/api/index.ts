import axios from 'axios';
import store from '../redux/store';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(req => {
  const authToken = store.getState().auth.authToken;

  if (authToken) {
    req.headers.Authorization = 'Bearer ' + authToken;
  }

  console.log('API PARAM====>', JSON.stringify(req.data));

  return req;
});

export default axiosClient;
