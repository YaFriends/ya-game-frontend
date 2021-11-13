import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard/Dashboard';
import { Error404 } from './pages/Error404';
import { Forum } from './pages/Forum';
import { GameCreation } from './pages/GameCreation/GameCreation';
import { GameLobby } from './pages/GameLobby';
import { GameSession } from './pages/GameSession';
import { Leaderboard } from './pages/Leaderboard/Leaderboard';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { ProfileHistory } from './pages/ProfileHistory/ProfileHistory';
import { Register } from './pages/Register/Register';
import { store } from './store';

const App: FC<Record<string, never>> = () => {
  return (
    <Provider store={store}>
      <Router>
        <main className="font-body text-black container game-container">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/forum" component={Forum} />
            <Route path="/game/create" component={GameCreation} />
            <Route path="/game/lobby" component={GameLobby} />
            <Route path="/game/:id" component={GameSession} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile/history" component={ProfileHistory} />
            <Route path="/profile" component={Profile} />
            <Route path="*" component={Error404} />
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
