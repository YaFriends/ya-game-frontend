import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import MiniGame from '../MiniGame';

type ClickMoreMiniGameProps = {
  players: Rivals;
  canvasId: string;
};

export class ClickMoreMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  clickCount: number;
  player: UserData | null;
  enemy: UserData | null;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
    this.clickCount = 0;
    this.player = null;
    this.enemy = null;
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
    });
  }

  draw() {
    this._drawFlasks();
    this._addListener();
  }

  _drawFlasks() {
    console.log(this.GameLoop.canvas.getBoundingClientRect().x);
    const canvas = this.GameLoop.canvas;
    canvas.blur();
    const ctx = this.GameLoop.context;
    ctx.strokeStyle = 'rgba(139, 194, 255, 0.4)';
    ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.moveTo(canvas.clientLeft, 10);
    ctx.lineTo(canvas.clientLeft, canvas.height - 10);
    ctx.stroke();
  }

  _onMouseUp = () => {
    this.clickCount++;
    console.log(this.clickCount);
  };

  _addListener() {
    this.GameLoop.canvas.addEventListener('mouseup', this._onMouseUp);
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
