import MiniGame from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';

type ClickMoreMiniGameProps = {
  players: Rivals;
  canvasId: string;
};

export class ClickMoreMiniGame extends MiniGame {
  finishCb: FinishFn | null;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
    });
  }

  draw() {}

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
