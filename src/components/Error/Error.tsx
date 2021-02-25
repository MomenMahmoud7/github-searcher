import { faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import classes from './Error.module.scss';

const Error = ({ error }:{error:string|null}) => (
  <div className={classes.container}>
    <Icon icon={faDizzy} />
    <h1>Error</h1>
    <p>{error || 'Something went wrong'}</p>
  </div>
);

export default Error;
