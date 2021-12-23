import { FinishFn, MiniGameFinishResponse, Rivals } from '../../@types/MiniGame';
import { UserData } from '../../@types/UserTypes';
import { TRANSLATION } from '../../lang/ru/translation';
import MiniGame from '../MiniGame';

import { Behavior, BehaviorProps } from './clickMoreMiniGame/Behavior';
import { FlasksController } from './clickMoreMiniGame/FlasksController';
import { Opponent } from './clickMoreMiniGame/Opponent';
import { Player } from './clickMoreMiniGame/Player';

type ClickMoreMiniGameProps = {
  players: Rivals;
  canvasId: string;
};

export class ClickMoreMiniGame extends MiniGame {
  finishCb: FinishFn | null;
  player: Behavior | null;
  opponent: Behavior | null;
  addPointEvent: CustomEvent;
  maxClick: number;
  playersProgress: FlasksController | null;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
    this.maxClick = 100;
    this.player = null;
    this.opponent = null;
    this.addPointEvent = new CustomEvent('addPointEvent', {
      bubbles: true,
    });
    this.playersProgress = null;
  }

  run() {
    console.log(this.players);
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this.draw();
      this._addListener();
    });
  }

  draw() {
    const playerProps: BehaviorProps = {
      user: this.players[0],
      canvas: this.GameLoop.canvas,
      addPointEvent: this.addPointEvent,
    };
    this.player = new Player(playerProps);

    const opponentProps: BehaviorProps = {
      user: this.players[1],
      canvas: this.GameLoop.canvas,
      addPointEvent: this.addPointEvent,
    };
    this.opponent = new Opponent(opponentProps);

    this.playersProgress = new FlasksController(this.GameLoop.canvas, this.GameLoop.context);
  }

  _addListener() {
    this.GameLoop.canvas.addEventListener('addPointEvent', this._checkWinner);
  }

  _removeListener() {
    this.GameLoop.canvas.removeEventListener('addPointEvent', this._checkWinner);
  }

  _checkWinner = () => {
    this._drawProgress();
    if (this.player !== null && this.opponent !== null) {
      const player = this._isWinner(this.player);
      if (player) {
        return this.finish(this.players[0]);
      }
    }
    return null;
  };

  _drawProgress() {
    if (this.player !== null) {
      this.playersProgress?.fill(true, this.player.clickCount);
    }
    if (this.opponent !== null) {
      this.playersProgress?.fill(false, this.opponent.clickCount);
    }
  }

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
