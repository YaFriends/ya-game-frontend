import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

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
          <Route path="/login">{currentUser ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">{currentUser ? <Redirect to="/" /> : <Register />}</Route>
          <Route path="/main" component={Main} />
          <Route path="/" exact>
            {currentUser ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/forum">{currentUser ? <Forum /> : <Redirect to="/login" />}</Route>
          <Route path="/game/create">
            {currentUser ? <GameCreation /> : <Redirect to="/login" />}
          </Route>
          <Route path="/game/lobby">{currentUser ? <GameLobby /> : <Redirect to="/login" />}</Route>
          <Route path="/game/:id">{currentUser ? <GameSession /> : <Redirect to="/login" />}</Route>
          <Route path="/leaderboard">
            {currentUser ? <Leaderboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile/history">
            {currentUser ? <ProfileHistory /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile">{currentUser ? <Profile /> : <Redirect to="/login" />}</Route>
          <Route path="*" component={Error404} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
