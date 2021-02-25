import axiosInstance from './axiosInstance';
import { AxiosPromise } from '../types';

const search:AxiosPromise = ({ searchType, searchText, pageNumber }) => axiosInstance
  .get(`/search/${searchType}?q=${searchText}&page=${pageNumber}`)
  .then((response) => response.data.items);

export default search;
