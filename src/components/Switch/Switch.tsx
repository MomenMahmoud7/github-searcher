import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import classes from './Switch.module.scss';

const Switch = ({
  onChange, value, icon,
}: {onChange: () => void, value:boolean, icon:any}) => (
  <button type="button" className={`${classes.ground} ${value ? classes.checked : ''}`}>
    <input onChange={onChange} type="checkbox" className={classes.checkbox} />
    <span className={`${classes.handler} ${value ? classes.active : ''}`} />
    <Icon icon={icon} className={classes.icon} />
  </button>
);

export default Switch;
