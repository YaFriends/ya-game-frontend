import MiniGame, { Team } from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';

export class ClickMoreMiniGame extends MiniGame {
  constructor(teams: Team[]) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
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
