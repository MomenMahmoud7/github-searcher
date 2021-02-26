import { Route } from 'react-router-dom';
import { useState } from 'react';
import _get from 'lodash/get';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import classes from './App.module.scss';

const App = () => {
  const defaultTheme = localStorage.theme || 'light';
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const toggle = { dark: 'light', light: 'dark' };
    localStorage.theme = _get(toggle, theme, '');
    setTheme(_get(toggle, theme, ''));
  };

  return (
    <main className={`${classes[theme]} ${classes.container}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Route exact path="/" component={Home} />
    </main>
  );
};

export default App;
