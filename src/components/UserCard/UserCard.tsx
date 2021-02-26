import avatarPlaceholder from '../../assets/avatar-placeholder.png';
import { User } from '../../types';

import classes from './UserCard.module.scss';

const UserCard = (props: User, index:number) => {
  const {
    avatar_url: imageUrl, login: userName, id, html_url: profileUrl,
  } = props;
  return (
    <a key={id + index} href={profileUrl} rel="noreferrer" target="_blank" className={classes.container}>
      <img src={imageUrl || avatarPlaceholder} alt="" />
      <div className={classes.content}>
        <strong>{userName}</strong>
      </div>
    </a>
  );
};
export default UserCard;
