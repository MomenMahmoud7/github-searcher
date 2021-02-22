import Search from '../../components/Search/Search';
import Content from '../../components/Content/Content';

import classes from './Home.module.scss';

const Home = () => (
  <div className={classes.container}>
    <Search />
    <Content />
  </div>
);

export default Home;
