import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { useAppDispatch } from './hooks/redux';
import { useAuth } from './hooks/use-auth';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Error404 } from './pages/Error404/Error404';
import { Forum } from './pages/Forum/Forum';
import { GameCreation } from './pages/GameCreation/GameCreation';
import { GameLobby } from './pages/GameLobby';
import { GameSet } from './pages/GameSet/GameSet';
import { Leaderboard } from './pages/Leaderboard/Leaderboard';
import { Login } from './pages/Login/Login';
import { Logout } from './pages/Logout';
import { Main } from './pages/Main/Main';
import { Profile } from './pages/Profile/Profile';
import { ProfileHistory } from './pages/ProfileHistory/ProfileHistory';
import { Register } from './pages/Register/Register';
import { useFetchUserQuery } from './services/AuthAPI';
import { authActions } from './store/slices/authSlice';

const App: FC<Record<string, never>> = () => {
  const { data: responseFetchUser = null } = useFetchUserQuery('');
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  if (!isAuth) {
    dispatch(authActions.setCurrentUser(responseFetchUser));
  }

  return (
    <main className="font-body text-black container game-container">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/forum" exact component={Forum} />
        <PrivateRoute path="/game/create" exact component={GameCreation} />
        <PrivateRoute path="/game/lobby" exact component={GameLobby} />
        <PrivateRoute path="/game/:id" component={GameSet} />
        <PrivateRoute path="/leaderboard" exact component={Leaderboard} />
        <PrivateRoute path="/profile/history" exact component={ProfileHistory} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/logout" exact component={Logout} />
        <Route path="/main" component={Main} />
        <Route path="*" component={Error404} />
      </Switch>
    </main>
  );
};

export default App;
