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
    return { winner: { players: [{ login: 'TeViYu' }] } };
  }
}
