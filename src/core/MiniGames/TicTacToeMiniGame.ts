import MiniGame, { Team } from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';

export class TicTacToeMiniGame extends MiniGame {
  constructor(teams: Team[]) {
    super({
      icon: '/static/img/games/tic_tac_toe/icon.jpg',
      name: TRANSLATION.TicTacToe.label,
      teams,
    });
  }

  draw() {}

  makeTurn() {}

  finish() {
    return { winner: { players: [{ login: 'TeViYu' }] } };
  }
}
