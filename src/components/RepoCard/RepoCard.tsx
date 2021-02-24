import dayjs from 'dayjs';
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
    <a key={id + userId + index} href={repoUrl} className={classes.container} rel="noreferrer" target="_blank">
      <div className={classes.content}>
        <h3>{name}</h3>
        <p>
          <strong>Stars : </strong>
          {stars}
        </p>
        <p>
          <strong>Created at : </strong>
          {dayjs(createdAt).format('D MMMM YYYY')}
        </p>
      </div>
      <div className={classes.owner}>
        <img src={imageUrl} alt={userName} />
        <div className={classes.content}>
          <a href={profileUrl} rel="noreferrer" target="_blank">
            <h4>{userName}</h4>
          </a>
        </div>
      </div>
    </a>
  );
};
export default RepoCard;
