import MiniGame from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { Team } from '../../@types/MiniGame';

type FieldBattleMiniGameProps = {
  teams: Team[];
  canvasId: string;
};

export class FieldBattleMiniGame extends MiniGame {
  constructor(props: FieldBattleMiniGameProps) {
    super({
      icon: '/static/img/games/field_battle/icon.jpg',
      name: TRANSLATION.FieldBattle.label,
      ...props,
    });
  }

  run() {
    console.log('running');
    return new Promise<void>(res => res());
  }

  draw() {}

  makeTurn() {}

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