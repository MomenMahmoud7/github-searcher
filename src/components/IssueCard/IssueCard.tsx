import dayjs from 'dayjs';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Issue } from '../../types';

import classes from './IssueCard.module.scss';

const IssueCard = (props: Issue, index:number) => {
  const {
    user: {
      avatar_url: imageUrl,
      login: userName,
      html_url: profileUrl,
      id: userId,
    },
    state,
    html_url: repoUrl,
    created_at: createdAt,
    id,
    title,
    body,
  } = props;

  return (
    <a key={id + userId + index} href={repoUrl} className={classes.container} rel="noreferrer" target="_blank">
      <div className={classes.content}>
        <span className={classes.title}>
          <h3>{title}</h3>
          <span>
            <strong>{state}</strong>
            <Icon icon={faCircle} className={state ? classes.active : ''} />
          </span>
        </span>
        <p className={classes.date}>{dayjs(createdAt).format('D MMMM YYYY')}</p>
        <h5>{body || '----'}</h5>
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
export default IssueCard;
