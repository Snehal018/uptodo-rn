import axios from 'axios';
import { store } from '../redux';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(req => {
  const authToken = store.getState().auth.authToken;

  if (authToken) {
    req.headers.Authorization = 'Bearer ' + authToken;
  }

  return req;
});

export default axiosClient;
