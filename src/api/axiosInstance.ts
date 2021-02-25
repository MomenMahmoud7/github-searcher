import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default axiosInstance;
