import whiteLogo from '../../assets/logo-white.png';
import blackLogo from '../../assets/logo-black.png';

import classes from './Header.module.scss';

const Header = ({ darkTheme }: { darkTheme:boolean }) => (
  <header className={classes.container}>
    <img src={darkTheme ? whiteLogo : blackLogo} alt="Github" className={classes.image} />
    <div className={classes.info}>
      <h3>Github Searcher</h3>
      <p>Search users or repositories below</p>
    </div>
  </header>
);
export default Header;
