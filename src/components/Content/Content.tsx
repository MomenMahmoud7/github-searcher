import { UIEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _get from 'lodash/get';
import _debounce from 'lodash/debounce';
import { State } from '../../types';
import Loader from '../Loader/Loader';
import onSearch from '../Search/helpers';
import UserCard from '../UserCard/UserCard';
import RepoCard from '../RepoCard/RepoCard';
import Error from '../Error/Error';
import NotFound from '../NotFound/NotFound';
import { setScrollLoading } from '../../redux/actions/fetchActions';
import IssueCard from '../IssueCard/IssueCard';

import classes from './Content.module.scss';

const Card = {
  repositories: RepoCard,
  users: UserCard,
  issues: IssueCard,
};

const Content = () => {
  const {
    fetch: {
      data,
      error,
      loading,
      scrollLoading,
    },
    search: {
      searchType,
      searchText,
      pageNumber,
    },
  } = useSelector((state:State) => state);

  const dispatch = useDispatch();
  const onScroll = (event:UIEvent<HTMLDivElement>) => {
    const { currentTarget: { scrollHeight, scrollTop, clientHeight } } = event;
    const listBottomReached = scrollHeight - clientHeight === Math.trunc(scrollTop);
    if (!listBottomReached) return;
    dispatch(setScrollLoading(true));
    dispatch(_debounce(onSearch(searchText, searchType, pageNumber + 1, data), 500));
  };

  const dataToRender = _get(data, `${searchText}-${searchType.value}`, []);

  if (loading) return <Loader size="normal" className={classes.loader} />;
  if (error) return <Error error={error} />;
  if (searchText && !dataToRender.length) return <NotFound />;

  return (
    <div className={classes.container}>
      {scrollLoading ? <div className={classes.overlay} /> : null}
      <div className={classes.content} onScroll={onScroll}>
        {dataToRender.map(_get(Card, searchType.value))}
      </div>
    </div>
  );
};

export default Content;
