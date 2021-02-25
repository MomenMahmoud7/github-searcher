import _get from 'lodash/get';
import search from '../../api/search';
import {
  setData, setError, setLoading, setScrollLoading,
} from '../../redux/actions/fetchActions';
import { setPageNumber } from '../../redux/actions/searchActions';
import { SearchType } from '../../types';

const onSearch = (
  text:string, type:SearchType, page:number, initialData:any = {},
) => async (dispatch:any) => {
  const cachedKey = `${text}-${type.value}`;
  const cachedItems = _get(initialData, cachedKey, []);

  if (cachedItems.length && cachedItems.length !== 30 * (page - 1)) {
    dispatch(setPageNumber(cachedItems.length / 30));
    dispatch(setError(null));
    dispatch(setLoading(false));
    dispatch(setScrollLoading(false));
    return;
  }

  try {
    const data = await search({ searchType: type.value, searchText: text, pageNumber: page });
    dispatch(setData({
      ...initialData,
      [cachedKey]: [...cachedItems, ...data],
    }));
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
