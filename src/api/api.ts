import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

instance.interceptors.request.use((config) => config);

instance.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default instance;
