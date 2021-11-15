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
    return {
      winner: {
        players: [
          {
            login: 'TeViYu',
            id: 1,
            first_name: 'Test',
            second_name: 'test 1',
            display_name: 'Testovich',
            email: 'string',
            phone: 'string',
            avatar: '',
          },
        ],
      },
    };
  }
}
