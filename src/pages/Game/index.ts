import GameLobby from './GameLobby';
import GameCreation from './GameCreation';
import GameSession from './GameSession';

import { Route } from '../types';

const routes: Route[] = [
  { path: '/game/lobby', component: GameLobby, name: 'Игра: лобби' },
  { path: '/game/create', component: GameCreation, name: 'Игра: создать' },
  { path: '/game/:id', component: GameSession, name: 'Игра' },
];

export default routes;
