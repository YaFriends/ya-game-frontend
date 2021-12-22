import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import MiniGame from '../MiniGame';

import { Action } from './clickMoreMiniGame/Action';

type ClickMoreMiniGameProps = {
  players: Rivals;
  canvasId: string;
};

export type ActionProps = {
  user: UserData;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  color: string;
  leftSide: boolean;
};

export class ClickMoreMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  player: UserData | null;
  enemy: UserData | null;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
    this.player = null;
    this.enemy = null;
  }

  run() {
    console.log(this.players);
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
    });
  }

  draw() {
    const currentUser: ActionProps = {
      user: this.players[0],
      context: this.GameLoop.context,
      canvas: this.GameLoop.canvas,
      color: 'green',
      leftSide: true,
    };
    new Action(currentUser).draw();
  }

  finish(player: UserData) {
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: player,
      });
    }
  }
}
