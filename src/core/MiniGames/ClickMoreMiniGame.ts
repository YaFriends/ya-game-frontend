import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import MiniGame from '../MiniGame';

import { Behavior, BehaviorProps } from './clickMoreMiniGame/Behavior';
import { FlasksController } from './clickMoreMiniGame/FlasksController';
import { Player } from './clickMoreMiniGame/Player';

type ClickMoreMiniGameProps = {
  players: Rivals;
  canvasId: string;
};

export class ClickMoreMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  player: Player | null;
  opponent: UserData | null;
  addPointEvent: CustomEvent;
  maxClick: number;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
    this.maxClick = this.GameLoop.canvas.height; //500
    this.player = null;
    this.opponent = null;
    this.addPointEvent = new CustomEvent('addPointEvent', {
      bubbles: true,
    });
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
    });
  }

  draw() {
    new FlasksController(this.GameLoop.canvas, this.GameLoop.context).run();
    this._addListener();
    const playerProps: BehaviorProps = {
      user: this.players[0],
      canvas: this.GameLoop.canvas,
      addPointEvent: this.addPointEvent,
    };
    this.player = new Player(playerProps);
    // this.player;
  }

  _addListener() {
    this.GameLoop.canvas.addEventListener('addPointEvent', this._checkWinner);
  }

  _removeListener() {
    this.GameLoop.canvas.removeEventListener('addPointEvent', this._checkWinner);
  }

  _checkWinner = () => {
    if (this.player !== null) {
      const clickCountPlayer = this.player.clickCount;
      console.log(clickCountPlayer);
      new FlasksController(this.GameLoop.canvas, this.GameLoop.context).fill(
        true,
        'green',
        clickCountPlayer
      );
      const player = this._isWinner(this.player);
      if (player) {
        return this.finish(this.players[0]);
      }
    }
    return null;
  };

  _isWinner(player: Behavior): boolean {
    return player.clickCount >= this.maxClick;
  }

  finish(player: UserData) {
    this._removeListener();
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: player,
      });
    }
  }
}
