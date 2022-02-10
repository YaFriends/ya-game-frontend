import MiniGame from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';

type BombermansProps = {
  players: Rivals;
  canvasId: string;
};

export class BombermansMiniGame extends MiniGame {
  finishCb: FinishFn | null;

  constructor(props: BombermansProps) {
    super({
      icon: '/static/img/games/bombermans/icon.jpg',
      name: TRANSLATION.Bombermans.label,
      ...props,
    });
    this.finishCb = () => null;
  }

  async gameLoop(): Promise<void> {
    return new Promise(res => {
      res();
    });
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
    });
  }

  draw() {}

  makeTurn() {}

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
          theme: 'dark',
        },
      });
    }
  }
}
