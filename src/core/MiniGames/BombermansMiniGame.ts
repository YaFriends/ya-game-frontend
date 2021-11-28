import MiniGame from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { Team } from '../../@types/MiniGame';

type BombermansProps = {
  teams: Team[];
  canvasId: string;
};

export class BombermansMiniGame extends MiniGame {
  constructor(props: BombermansProps) {
    super({
      icon: '/static/img/games/bombermans/icon.jpg',
      name: TRANSLATION.Bombermans.label,
      ...props,
    });
  }

  async gameLoop(): Promise<void> {
    return new Promise(res => {
      res();
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
