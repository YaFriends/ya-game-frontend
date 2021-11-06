import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Error404 } from './pages/Error404';
import { Forum } from './pages/Forum';
import { GameCreation } from './pages/GameCreation';
import { GameLobby } from './pages/GameLobby';
import { GameSession } from './pages/GameSession';
import { Leaderboard } from './pages/Leaderboard';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { ProfileHistory } from './pages/ProfileHistory';
import { Register } from './pages/Register';
import { Menu } from './components/Menu';

const App: FC<{}> = () => {
  return (
    <Router>
      <Menu/>
      <main>
        <Switch>
          <Route path="/" exact component={ Dashboard }/>
          <Route path="/forum" component={ Forum }/>
          <Route path="/game/create" component={ GameCreation }/>
          <Route path="/game/lobby" component={ GameLobby }/>
          <Route path="/game/:id" component={ GameSession }/>
          <Route path="/leaderboard" component={ Leaderboard }/>
          <Route path="/login" component={ Login }/>
          <Route path="/register" component={ Register }/>
          <Route path="/profile/history" component={ ProfileHistory }/>
          <Route path="/profile" component={ Profile }/>
          <Route path="*" component={ Error404 }/>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
