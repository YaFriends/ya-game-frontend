import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import pages from './pages';

const {
  Login,
  Register,
  Dashboard,
  Forum,
  GameCreation,
  GameLobby,
  GameSession,
  Leaderboard,
  Profile,
  ProfileHistory,
} = pages;

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Главнотайз</Link>
          </li>
          <li>
            <Link to="/login">Авторайз</Link>
          </li>
          <li>
            <Link to="/register">Регистрайз</Link>
          </li>
          <li>
            <Link to="/leaderboard">Лидербордайз</Link>
          </li>
          <li>
            <Link to="/game/create">Создатайз игратайз</Link>
          </li>
          <li>
            <Link to="/game/lobby">Создатайз сешионайз</Link>
          </li>
          <li>
            <Link to="/game/:id">Сешионайз игратайз</Link>
          </li>
          <li>
            <Link to="/profile">Профалайз</Link>
          </li>
          <li>
            <Link to="/profile/history">Профалайз хисторайз</Link>
          </li>
          <li>
            <Link to="/forum">Форумайз</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/leaderboard">
            <Leaderboard/>
          </Route>
          <Route path="/game/create">
            <GameCreation/>
          </Route>
          <Route path="/game/lobby">
            <GameLobby/>
          </Route>
          <Route path="/game/:id">
            <GameSession/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/profile/history">
            <ProfileHistory/>
          </Route>
          <Route path="/forum">
            <Forum/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
export default App;
