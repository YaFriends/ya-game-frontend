import MiniGame, { Team } from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';

export class BombermansMiniGame extends MiniGame {
  constructor(teams: Team[]) {
    super({
      icon: '/static/img/games/bombermans/icon.jpg',
      name: TRANSLATION.Bombermans.label,
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
