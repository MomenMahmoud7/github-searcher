import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';

import classes from './App.module.scss';

const App = () => {
  const darkTheme = false;

  return (
    <main className={`${classes.container} ${darkTheme ? classes.dark : ''}`}>
      <Header darkTheme={darkTheme} />
      <Route exact path="/" component={Home} />
    </main>
  );
};

export default App;
