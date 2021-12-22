import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import MiniGame from '../MiniGame';

import { Player } from './clickMoreMiniGame/Player';

type ClickMoreMiniGameProps = {
  players: Rivals;
  canvasId: string;
};

export type BehaviorProps = {
  user: UserData;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  color: string;
  isLeftSide: boolean;
  addPointEvent: CustomEvent;
};

export class ClickMoreMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  player: UserData | null;
  enemy: UserData | null;
  addPointEvent: CustomEvent;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
    this.player = null;
    this.enemy = null;
    this.addPointEvent = new CustomEvent('addPointEvent', { bubbles: true });
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
    });
  }

  draw() {
    const playerProps: BehaviorProps = {
      user: this.players[0],
      context: this.GameLoop.context,
      canvas: this.GameLoop.canvas,
      color: 'green',
      isLeftSide: true,
      addPointEvent: this.addPointEvent,
    };
    new Player(playerProps).draw();
  }

  finish(player: UserData) {
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: player,
      });
    }
  }
}
