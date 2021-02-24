import classes from './Error.module.scss';

const Error = ({ error }:{error:string|null}) => (
  <div className={classes.container}>
    <h1>Error  :(</h1>
    <p>{error || 'Something went wrong'}</p>
  </div>
);

export default Error;
