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
  clicksForWin: number;
  playersProgress: FlasksController | null;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
    this.clicksForWin = 100;
    this.player = null;
    this.opponent = null;
    this.addPointEvent = new CustomEvent('addPointEvent');
    this.playersProgress = null;
  }

  run() {
    return new Promise<MiniGameFinishResponse>(res => {
      this.finishCb = res;
      this._countDownBeforePlay();
    });
  }

  _drawHand() {
    const image = new Image();
    const { width, height } = this.GameLoop.canvas.getBoundingClientRect();
    image.src = '../../../static/img/games/click_more/tap.png';
    image.addEventListener('load', () => {
      const x = width / 2 - image.width / 2;
      const y = height / 2 - image.height / 2;
      this.GameLoop.context.drawImage(image, x, y);
    });
  }

  _countDownBeforePlay = () => {
    let countDown = 0;
    const countDownInterval = setInterval(() => {
      this._clearCanvas();
      this._drawPreview(countDown--);
      if (countDown < 0) {
        this._clearCanvas();
        clearInterval(countDownInterval);
        this._play();
      }
    }, 1000);
  };

  _clearCanvas() {
    this.GameLoop.context.clearRect(0, 0, this.GameLoop.canvas.width, this.GameLoop.canvas.height);
  }

  _play() {
    this.draw();
    this._createPlayers();
    this._addListener();
  }

  _drawPreview(count: number) {
    const context = this.GameLoop.context;
    const canvas = this.GameLoop.canvas;
    context.font = '500 80px Ubuntu, sans-serif';
    context.fillStyle = 'green';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(count.toString(), canvas.height / 2, canvas.height / 2);
  }

  draw() {
    this.playersProgress = new FlasksController(this.GameLoop.canvas, this.GameLoop.context);
    this._drawHand();
  }

  _createPlayers() {
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
      const playerIsWin = this._isWinner(this.player);
      const opponentIsWin = this._isWinner(this.opponent);
      if (opponentIsWin || playerIsWin) {
        return this.finish(playerIsWin ? this.players[0] : this.players[1]);
      }
    }
    return null;
  };

  _drawProgress() {
    const onePercent = this.clicksForWin / 100;
    if (this.player !== null) {
      this.playersProgress?.fill(true, this.player.clickCount / onePercent);
    }
    if (this.opponent !== null) {
      this.playersProgress?.fill(false, this.opponent.clickCount / onePercent);
    }
  }

  _isWinner(player: Behavior): boolean {
    return player.clickCount >= this.clicksForWin;
  }

  finish(player: UserData) {
    this.player?.finish();
    this.opponent?.finish();
    this._removeListener();
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: player,
      });
    }
  }
}
