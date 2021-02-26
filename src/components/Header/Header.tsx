import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import whiteLogo from '../../assets/logo-white.png';
import blackLogo from '../../assets/logo-black.png';
import Switch from '../Switch/Switch';

import classes from './Header.module.scss';

const Header = ({ theme, toggleTheme }: { theme:string, toggleTheme: () => void }) => (
  <header className={classes.container}>
    <div className={classes.identity}>
      <img src={theme === 'dark' ? whiteLogo : blackLogo} alt="Github" className={classes.image} />
      <div className={classes.info}>
        <h3>Github Searcher</h3>
        <p>Search users or repositories below</p>
      </div>
    </div>
    <Switch onChange={toggleTheme} value={theme === 'dark'} icon={theme === 'dark' ? faSun : faMoon} />
  </header>
);
export default Header;
