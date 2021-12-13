import { TRANSLATION } from '../../lang/ru/translation';
import { GameLoop } from '../GameLoop';
import MiniGame from '../MiniGame';
import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';

type CircleTriangleSquareProps = {
  players: Rivals;
  canvasId: string;
};

export class CircleTriangleSquareMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  loop: GameLoop;

  constructor(props: CircleTriangleSquareProps) {
    super({
      icon: '/static/img/games/circle_triangle_square/icon.jpg',
      name: TRANSLATION.CircleTriangleSquare.label,
      ...props,
    });

    this.loop = new GameLoop('canvas');
    this.finishCb = () => null;
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
    });
  }

  draw() {
    console.log('draw');
  }

  makeTurn() {
    console.log('makeTurn');
  }

  finish() {
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: {
          login: 'TeViYu',
          id: 1,
          first_name: 'Test',
          second_name: 'test 1',
          display_name: 'Testovich',
          email: 'string',
          phone: 'string',
          avatar: '',
        },
      });
    }
  }
}
