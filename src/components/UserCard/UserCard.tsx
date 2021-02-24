import classes from './UserCard.module.scss';

import { User } from '../../types';

const UserCard = (props: User, index:number) => {
  const {
    avatar_url: imageUrl, login: userName, id, html_url: profileUrl,
  } = props;
  return (
    <a key={id + index} href={profileUrl} className={classes.container} rel="noreferrer" target="_blank">
      <img src={imageUrl} alt={userName} />
      <div className={classes.content}>
        <h3>{userName}</h3>
      </div>
    </a>
  );
};
export default UserCard;
