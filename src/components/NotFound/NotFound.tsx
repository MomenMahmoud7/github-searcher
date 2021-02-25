import { faMehBlank } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import classes from './NotFound.module.scss';

const NotFound = () => (
  <div className={classes.container}>
    <Icon icon={faMehBlank} />
    <h1>No Result Found</h1>
    <p>Try changing the filter or search term</p>
  </div>
);

export default NotFound;
