import classes from './UserCard.module.scss';

import { User } from '../../types';

const UserCard = ({
  avatar_url: imageUrl, login: userName, id, html_url: profileUrl,
}: User) => (
  <a key={id} href={profileUrl} className={classes.container} rel="noreferrer" target="_blank">
    <img src={imageUrl} alt={userName} />
    <div className={classes.content}>
      <h3>{userName}</h3>
    </div>
  </a>
);
export default UserCard;
