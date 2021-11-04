import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import pages from './pages';

const App: React.FC = () => {
  const links = pages.map(({ path, name }) => <li key={ path }><Link to={ path }>{ name }</Link></li>);
  const routes = pages.map(({ path, component: Component, exact }) => <Route
    key={ path }
    path={ path }
    exact={ Boolean(exact) }
  ><Component/></Route>);

  return (
    <Router>
      <nav>
        <ul>
          { links }
        </ul>
      </nav>
      <main>
        <Switch>
          { routes }
        </Switch>
      </main>
    </Router>
  );
};

export default App;
