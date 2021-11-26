import { TRANSLATION } from '../../lang/ru/translation';
import { GameLoop } from '../GameLoop';
import MiniGame, { Team } from '../MiniGame';

type CircleTriangleSquareProps = {
  teams: Team[];
  canvasId: string;
};

export class CircleTriangleSquareMiniGame extends MiniGame {
  loop: GameLoop;
  constructor(props: CircleTriangleSquareProps) {
    super({
      icon: '/static/img/games/circle_triangle_square/icon.jpg',
      name: TRANSLATION.CircleTriangleSquare.label,
      ...props,
    });

    this.loop = new GameLoop('canvas');
  }

  run() {
    console.log('running');
    return new Promise<void>(res => res());
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
