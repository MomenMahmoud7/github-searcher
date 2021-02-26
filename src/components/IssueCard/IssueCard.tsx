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
      <span className={classes.header}>
        <strong>{title}</strong>
        <span>
          <strong>{state}</strong>
          <Icon icon={faCircle} className={state ? classes.active : ''} />
        </span>
      </span>
      <div className={classes.content}>
        <p>{dayjs(createdAt).format('D MMMM YYYY')}</p>
        <p>{body || '----'}</p>
      </div>
      <a href={profileUrl} rel="noreferrer" target="_blank" className={classes.footer}>
        <img src={imageUrl} alt={userName} />
        <strong>{userName}</strong>
      </a>
    </a>
  );
};
export default IssueCard;
