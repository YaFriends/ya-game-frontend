import MiniGame from '../MiniGame';
import { TRANSLATION } from '../../lang/ru/translation';
import { Team } from '../../@types/MiniGame';

type ClickMoreMiniGameProps = {
  teams: Team[];
  canvasId: string;
};

export class ClickMoreMiniGame extends MiniGame {
  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
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