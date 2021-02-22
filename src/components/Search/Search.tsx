import { useDispatch, useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
import { ChangeEvent } from 'react';
import { setSearchText, setSearchType } from '../../redux/actions/searchActions';
import { SearchType, State } from '../../types';
import Select from '../Select/Select';
import onSearch from './helpers';

import classes from './Search.module.scss';

const Search = () => {
  const searchTypes = [
    { label: 'User', value: 'users' },
    { label: 'Repository', value: 'repositories' },
  ];
  const { searchType, searchText } = useSelector((state:State) => state.search);
  const dispatch = useDispatch();

  const onSelectChange = (type:SearchType) => {
    dispatch(setSearchType(type));
    if (searchText) dispatch(onSearch(searchText, type, 1));
  };

  const onTexChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    dispatch(setSearchText(value));
    dispatch(onSearch(value, searchType, 1));
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
