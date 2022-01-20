import React, { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { SwitchTheme } from './components/ui/SwitchTheme/SwitchTheme';
import { REDIRECT_URI_FOR_OAUTH } from './config';
import { useAppDispatch, useAppSelector } from './hooks/redux';
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
import { useFetchUserQuery, useLazyFetchUserQuery } from './services/AuthAPI';
import { useOAuthYandexMutation } from './services/OAuthAPI';
import { authActions } from './store/slices/authSlice';
import { currentTheme, themeActions } from './store/slices/themeSlice';
import { isServer } from './utils/isServer';

const App: FC<Record<string, never>> = () => {
  const [attemptOAuthYandex] = useOAuthYandexMutation();
  const { data: responseFetchUser = null } = useFetchUserQuery();
  const [attemptFetchUser] = useLazyFetchUserQuery();
  const dispatch = useAppDispatch();
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  if (typeof window !== 'undefined') {
    useEffect(() => {
      dispatch(
        themeActions.setCurrentTheme(
          ((localStorage.getItem('theme') as currentTheme) || 'dark') as currentTheme
        )
      );
    }, []);
  }
  const documentLocation = isServer ? {} : document.location.href;

  useEffect(() => {
    if (/code=([^&]+)/.exec(document.location.href) !== null) {
      attemptOAuthYandex({
        code: /code=([^&]+)/.exec(document.location.href)![1],
        redirect_uri: REDIRECT_URI_FOR_OAUTH,
      }).then(() => attemptFetchUser());
    }
  }, [documentLocation]);

  useEffect(() => {
    dispatch(authActions.setCurrentUser(responseFetchUser));
  }, [responseFetchUser]);

  useEffect(() => {
    const rootTag = document.getElementById('root');
    rootTag!.className = '';
    rootTag!.classList.add(currentTheme);
  }, [currentTheme]);

  return (
    <main className="font-body text-black container game-container dark:bg-black">
      <SwitchTheme />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/forum" exact component={Forum} />
        <PrivateRoute path="/game/create" component={GameCreation} />
        <PrivateRoute path="/game/lobby" exact component={GameLobby} />
        <PrivateRoute path="/game/:id" component={GameSet} />
        <PrivateRoute path="/leaderboard" exact component={Leaderboard} />
        <PrivateRoute path="/profile/history" exact component={ProfileHistory} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/logout" exact component={Logout} />
        <Route path="/main" component={Main} />
        <Route path="*" component={Error404} />
      </Switch>
    </main>
  );
};

export default App;
