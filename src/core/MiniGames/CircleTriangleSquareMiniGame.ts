import { TRANSLATION } from '../../lang/ru/translation';
import { GameLoop } from '../GameLoop';
import MiniGame, { Team } from '../MiniGame';

export class CircleTriangleSquareMiniGame extends MiniGame {
  loop: GameLoop;
  constructor(teams: Team[]) {
    super({
      icon: '/static/img/games/circle_triangle_square/icon.jpg',
      name: TRANSLATION.CircleTriangleSquare.label,
      teams,
    });

    this.loop = new GameLoop('canvas');
  }

  async gameLoop(): Promise<void> {
    return new Promise(res => {
      console.log(this.loop);
      res();
    });
  }

  draw() {
    console.log('draw');
  }

  makeTurn() {
    console.log('makeTurn');
  }

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