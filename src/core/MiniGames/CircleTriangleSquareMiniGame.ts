import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { GameLoop } from '../GameLoop';
import MiniGame from '../MiniGame';

type itemProps = {
  id: number;
  name: string;
  label: string;
  src: string;
};

type CircleTriangleSquareProps = {
  players: Rivals;
  canvasId: string;
};

// TODO: Экран выбора item
// TODO: Экран выбора игрока 1 и игрока 2
// TODO: Экран результата
// Игрок выбирает одну из 3 корточек на след. экране показывается выбор игроков и далее на след экране, кто победил и снова по кругу до 3 побед
export class CircleTriangleSquareMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  loop: GameLoop;
  items: itemProps[];
  roundsWinForWin: number;

  constructor(props: CircleTriangleSquareProps) {
    super({
      icon: '/static/img/games/circle_triangle_square/icon.jpg',
      name: TRANSLATION.CircleTriangleSquare.label,
      ...props,
    });

    this.roundsWinForWin = 3;
    this.items = [
      {
        id: 1,
        name: 'circle',
        label: 'Круг',
        src: '../../../static/img/games/click_more/tap.png',
      },
      {
        id: 2,
        name: 'triangle',
        label: 'Треугольник',
        src: '../../../static/img/games/click_more/tap.png',
      },
      {
        id: 3,
        name: 'square',
        label: 'Квадрат',
        src: '../../../static/img/games/click_more/tap.png',
      },
    ];

    this.loop = new GameLoop('canvas');
    this.finishCb = () => null;
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
    });
  }

  draw() {
    this._initGame();
    console.log('draw');
  }

  makeTurn() {
    console.log('makeTurn');
  }

  _initGame() {
    const step = 200;
    // TODO: Создать items для выбора
    // TODO: Повесить событие выбора на item
    console.log('_initGame');
    this.items.forEach(({ src }, index) => {
      const image = new Image();
      const { height } = this.GameLoop.canvas.getBoundingClientRect();
      image.src = src;
      console.log(image);

      const drawItem = () => {
        const x = 50 + step * index;
        const y = height / 2 - image.height / 2;
        this.GameLoop.context.drawImage(image, x, y);
      };

      image.addEventListener('load', drawItem);
    });
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
