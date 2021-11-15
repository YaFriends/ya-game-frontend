import MiniGame, { Team } from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';

export class FieldBattleMiniGame extends MiniGame {
  constructor(teams: Team[]) {
    super({
      icon: '/static/img/games/field_battle/icon.jpg',
      name: TRANSLATION.FieldBattle.label,
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
