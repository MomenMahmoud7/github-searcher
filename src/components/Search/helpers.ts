import _get from 'lodash/get';
import search from '../../api/search';
import {
  setData, setError, setLoading, setScrollLoading,
} from '../../redux/actions/fetchActions';
import { setPageNumber } from '../../redux/actions/searchActions';
import { SearchType } from '../../types';

const onSearch = (
  text:string, type:SearchType, page:number, initialData:Array<any> = [],
) => async (dispatch:any) => {
  if (initialData.length) dispatch(setScrollLoading(true));
  else dispatch(setLoading(true));

  if (text.length < 3) {
    dispatch(setData([]));
    dispatch(setLoading(false));
    dispatch(setPageNumber(1));
    return;
  }
  try {
    const data = await search({ searchType: type.value, searchText: text, pageNumber: page });
    dispatch(setData([...initialData, ...data]));
    dispatch(setPageNumber(page));
    dispatch(setError(null));
    dispatch(setLoading(false));
    dispatch(setScrollLoading(false));
  } catch (error) {
    dispatch(setError(_get(error, 'response.data.message', '')));
    dispatch(setLoading(false));
    dispatch(setScrollLoading(false));
  }
};
export default onSearch;
