import classes from './Error.module.scss';

const Error = ({ error }:{error:string}) => {
  console.log('object');
  return (
    <div className={classes.container}>
      {error}
    </div>
  );
};

export default Error;
