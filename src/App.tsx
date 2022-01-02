import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/*import { PrivateRoute } from './components/PrivateRoute';
import { useAppDispatch } from './hooks/redux';
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
import { Register } from './pages/Register/Register';*/
/*import { useFetchUserQuery } from './services/AuthAPI';
import { authActions } from './store/slices/authSlice';*/

export const Main = () => <div>Главная</div>;
export const Second = () => <div>Вторичная</div>;
export const Third = () => <div>Third</div>;

const App: FC<Record<string, never>> = () => {
  /*const { data: responseFetchUser = null } = useFetchUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.setCurrentUser(responseFetchUser));
  }, [responseFetchUser]);*/

  return (
    <main className="font-body text-black container game-container">
      <Link to="/second">на вторая страница</Link>
      <Link to="/third">на третью</Link>
      <Link to="/">на главную</Link>
      <Switch>
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
        <Route path="/" component={Main} />
      </Switch>
      {/*<Switch>
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
      </Switch>*/}
    </main>
  );
};

export default App;
