import { useDispatch, useSelector } from 'react-redux';
import _debounce from 'lodash/debounce';
import { UIEvent } from 'react';
import { State } from '../../types';
import onSearch from '../Search/helpers';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';

import classes from './Content.module.scss';

const Content = () => {
  const {
    fetch: {
      loading, scrollLoading, error, data,
    },
    search: { searchType, searchText, pageNumber },
  } = useSelector((state:State) => state);

  const dispatch = useDispatch();

  const onScroll = (event:UIEvent<HTMLDivElement>) => {
    const { currentTarget: { scrollHeight, scrollTop, clientHeight } } = event;
    const listBottomReached = scrollHeight - clientHeight === Math.trunc(scrollTop);

    const debouncedSearch = _debounce(onSearch(searchText, searchType, pageNumber + 1, data), 500);
    if (listBottomReached) dispatch(debouncedSearch);
  };

  if (loading) return <Loader size="normal" className={classes.loader} />;
  if (error) return <div>{error}</div>;
  if (!data.length) return <></>;

  return (
    <div className={classes.container}>
      {scrollLoading ? <div className={classes.overlay} /> : null}
      <div className={classes.content} onScroll={onScroll}>
        {data.map((item:any) => <Card key={item.id} />)}
      </div>
    </div>
  );
};

export default Content;
