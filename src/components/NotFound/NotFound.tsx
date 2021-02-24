import classes from './NotFound.module.scss';

import notFoundImage from '../../assets/no-result.jpg';

const NotFound = () => (
  <div className={classes.container}>
    <img src={notFoundImage} alt="Not Found" />
  </div>
);

export default NotFound;
