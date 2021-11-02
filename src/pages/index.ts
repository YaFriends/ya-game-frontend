import Auth from './Auth';
import Dashboard from './Dashboard';
import Forum from './Forum';
import Game from './Game';
import Leaderboard from './Leaderboard';
import Profile from './Profile';

export default { ...Auth, ...Dashboard, ...Forum, ...Game, ...Leaderboard, ...Profile };
