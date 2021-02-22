import classes from './Loader.module.scss';

const Loader = ({ size, className } : { size:'small'|'normal'|'large', className:string}) => (
  <div className={`${classes.container} ${classes[size]} ${className}`}>
    <div className={classes.circle} />
    <div className={classes.circle} />
    <div className={classes.circle} />
  </div>
);

export default Loader;
