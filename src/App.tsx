import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthController } from './controllers/AuthController';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Error404 } from './pages/Error404/Error404';
import { Forum } from './pages/Forum/Forum';
import { GameCreation } from './pages/GameCreation';
import { GameLobby } from './pages/GameLobby';
import { GameSession } from './pages/GameSession';
import { Leaderboard } from './pages/Leaderboard/Leaderboard';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';
import { Profile } from './pages/Profile';
import { ProfileHistory } from './pages/ProfileHistory/ProfileHistory';
import { Register } from './pages/Register/Register';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { authActions } from './store/slices/authSlice';

const App: FC<Record<string, never>> = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.auth.currentUser);

  // TODO: Написать свой хук для проверки авторизации
  useEffect(() => {
    if (!currentUser) {
      AuthController.fetchUser().then(response => dispatch(authActions.setCurrentUser(response)));
    }
  }, [currentUser]);

  return (
    <Router>
      <main className="font-body text-black container game-container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/forum" component={Forum} />
          <Route path="/game/create" component={GameCreation} />
          <Route path="/game/lobby" component={GameLobby} />
          <Route path="/game/:id" component={GameSession} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/profile/history" component={ProfileHistory} />
          <Route path="/profile" component={Profile} />
          <Route path="/main" component={Main} />
          <Route path="*" component={Error404} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
