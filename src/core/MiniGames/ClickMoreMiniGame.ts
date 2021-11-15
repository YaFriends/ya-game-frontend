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
    return { winner: { players: [{ login: 'TeViYu' }] } };
  }
}
