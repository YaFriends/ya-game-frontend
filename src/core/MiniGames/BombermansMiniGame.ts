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
    return { winner: { players: ['TeViYu'] } };
  }
}
