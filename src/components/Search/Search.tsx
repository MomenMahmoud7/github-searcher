import { useDispatch, useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
import { ChangeEvent } from 'react';
import { setSearchText, setSearchType } from '../../redux/actions/searchActions';
import { setLoading } from '../../redux/actions/fetchActions';
import { SearchType, State } from '../../types';
import Select from '../Select/Select';
import onSearch from './helpers';

import classes from './Search.module.scss';

const Search = () => {
  const searchTypes = [
    { label: 'Users', value: 'users' },
    { label: 'Issues', value: 'issues' },
    { label: 'Repositories', value: 'repositories' },
  ];
  const {
    search: { searchType, searchText },
    fetch: { data },
  } = useSelector((state:State) => state);
  const dispatch = useDispatch();

  const onSelectChange = (type:SearchType) => {
    dispatch(setSearchType(type));
    if (searchText) {
      dispatch(setLoading(true));
      dispatch(onSearch(searchText, type, 1, data));
    }
  };

  const onTexChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    if (value.length < 3) {
      dispatch(setSearchText(''));
      return;
    }
    dispatch(setSearchText(value));
    dispatch(setLoading(true));
    dispatch(onSearch(value, searchType, 1, data));
  };

  return (
    <div className={classes.container}>
      <input
        defaultValue={searchText}
        className={classes.input}
        placeholder="Start typing to search..."
        onChange={_debounce(onTexChange, 1000)}
      />
      <Select options={searchTypes} value={searchType} onChange={onSelectChange} />
    </div>
  );
};
export default Search;
