import MiniGame from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';

type FieldBattleMiniGameProps = {
  players: Rivals;
  canvasId: string;
};

export class FieldBattleMiniGame extends MiniGame {
  finishCb: FinishFn | null;

  constructor(props: FieldBattleMiniGameProps) {
    super({
      icon: '/static/img/games/field_battle/icon.jpg',
      name: TRANSLATION.FieldBattle.label,
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
          theme: '',
        },
      });
    }
  }
}
