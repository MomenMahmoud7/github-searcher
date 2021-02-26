import classes from './UserCard.module.scss';

import { User } from '../../types';

const UserCard = (props: User, index:number) => {
  const {
    avatar_url: imageUrl, login: userName, id, html_url: profileUrl,
  } = props;
  return (
    <a key={id + index} href={profileUrl} rel="noreferrer" target="_blank" className={classes.container}>
      <img src={imageUrl} alt="" />
      <div className={classes.content}>
        <strong>{userName}</strong>
      </div>
    </a>
  );
};
export default UserCard;
