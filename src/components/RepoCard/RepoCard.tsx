import dayjs from 'dayjs';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Repo } from '../../types';

import classes from './RepoCard.module.scss';

const RepoCard = (props: Repo, index:number) => {
  const {
    owner: {
      avatar_url: imageUrl,
      login: userName,
      html_url: profileUrl,
      id: userId,
    },
    stargazers_count: stars,
    html_url: repoUrl,
    created_at: createdAt,
    id,
    name,
  } = props;

  return (
    <a key={id + userId + index} href={repoUrl} rel="noreferrer" target="_blank" className={classes.container}>
      <span className={classes.header}>
        <strong>{name}</strong>
        <span>
          <strong>{stars}</strong>
          <Icon icon={faStar} />
        </span>
      </span>
      <div className={classes.content}>
        <p>{dayjs(createdAt).format('D MMMM YYYY')}</p>
      </div>
      <a href={profileUrl} rel="noreferrer" target="_blank" className={classes.footer}>
        <img src={imageUrl} alt="" />
        <strong>{userName}</strong>
      </a>
    </a>
  );
};
export default RepoCard;
