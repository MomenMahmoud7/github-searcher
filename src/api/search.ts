import axios from './api';
import { AxiosPromise } from '../types';

const search:AxiosPromise = ({ searchType, searchText, pageNumber }) => axios
  .get(`/search/${searchType}?q=${searchText}&page=${pageNumber}`)
  .then((response) => response.data.items);

export default search;
