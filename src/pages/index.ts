import Auth from './Auth';
import Dashboard from './Dashboard';
import Forum from './Forum';
import Game from './Game';
import Leaderboard from './Leaderboard';
import Profile from './Profile';
import Errors from './Errors';

export default [...Auth, ...Forum, ...Game, ...Leaderboard, ...Profile, ...Dashboard, ...Errors];
