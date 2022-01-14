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
  player: Behavior;
  opponent: Behavior;
  addPointEvent: CustomEvent;
  clicksForWin: number;
  playersProgress: FlasksController | null;
  countDown: number;
  countDownStep: number;

  constructor(props: ClickMoreMiniGameProps) {
    super({
      icon: '/static/img/games/click_more/icon.jpg',
      name: TRANSLATION.ClickMore.label,
      ...props,
    });
    this.finishCb = () => null;
    this.clicksForWin = 100;
    this.addPointEvent = new CustomEvent('addPointEvent');
    this.player = new Player(this._createBehaviorProps(this.players[0]));
    this.opponent = new Opponent(this._createBehaviorProps(this.players[1]));
    this.playersProgress = null;
    this.countDown = 3;
    this.countDownStep = 1000;
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
    const drawImage = () => {
      const x = width / 2 - image.width / 2;
      const y = height / 2 - image.height / 2;
      this.GameLoop.context.drawImage(image, x, y);
    };
    image.addEventListener('load', drawImage);
  }

  _countDownBeforePlay = () => {
    const countDownInterval = setInterval(() => {
      this._clearCanvas();
      this._drawCounter(this.countDown--);
      if (this.countDown < 0) {
        this._clearCanvas();
        clearInterval(countDownInterval);
        this._play();
      }
    }, this.countDownStep);
  };

  _clearCanvas() {
    this.GameLoop.context.clearRect(0, 0, this.GameLoop.canvas.width, this.GameLoop.canvas.height);
  }

  _play() {
    this.draw();
    this._addListenerForPoints();
    this.player.run();
    this.opponent.run();
  }

  _drawCounter(count: number) {
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

  _createBehaviorProps = (player: UserData): BehaviorProps => {
    return {
      user: player,
      canvas: this.GameLoop.canvas,
      addPointEvent: this.addPointEvent,
    };
  };

  _addListenerForPoints() {
    this.GameLoop.canvas.addEventListener('addPointEvent', this._checkWinnerAndDrawProgress);
  }

  _removeListenerForPoints() {
    this.GameLoop.canvas.removeEventListener('addPointEvent', this._checkWinnerAndDrawProgress);
  }

  _checkWinnerAndDrawProgress = () => {
    this._drawProgress();
    const playerIsWin = this._isWinner(this.player);
    const opponentIsWin = this._isWinner(this.opponent);
    if (opponentIsWin || playerIsWin) {
      this.finish(playerIsWin ? this.players[0] : this.players[1]);
    }
  };

  _drawProgress() {
    const onePercent = this.clicksForWin / 100;
    this.playersProgress?.fill(true, this.player.clickCount / onePercent);
    this.playersProgress?.fill(false, this.opponent.clickCount / onePercent);
  }

  _isWinner(player: Behavior): boolean {
    return player.clickCount >= this.clicksForWin;
  }

  finish(player: UserData) {
    this.player.finish();
    this.opponent.finish();
    this._removeListenerForPoints();
    if (typeof this.finishCb === 'function') {
      this.finishCb({
        winner: player,
      });
    }
  }
}
