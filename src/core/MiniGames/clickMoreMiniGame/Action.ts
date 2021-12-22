import { UserData } from '../../../@types/UserTypes';
import { ActionProps } from '../ClickMoreMiniGame';

import { Flask } from './Flask';

export type FlaskProps = {
  color: string;
  lineToY: number;
  leftSide: boolean;
};

export class Action {
  user: UserData;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  clickCount: number;
  step: number;
  color: string;
  leftSide: boolean;

  constructor({ user, context, canvas, color, leftSide }: ActionProps) {
    this.user = user;
    this.context = context;
    this.canvas = canvas;
    this.clickCount = 0;
    this.step = 10;
    this.color = color;
    this.leftSide = leftSide;
  }

  draw() {
    new Flask({
      color: 'rgba(139, 194, 255, 0.4)',
      leftSide: this.leftSide,
      lineToY: 10,
    }).draw(this.context, this.canvas);
    this._addListener();
  }

  _onMouseUp = () => {
    this.clickCount += this.step;
    const duration = this.canvas.height - this.clickCount;
    if (this.clickCount >= this.canvas.height) {
      return this.finish();
    }
    return new Flask({
      color: this.color,
      leftSide: this.leftSide,
      lineToY: duration,
    }).draw(this.context, this.canvas);
  };

  _addListener() {
    this.canvas.addEventListener('mouseup', this._onMouseUp);
  }

  _removeListener() {
    this.canvas.removeEventListener('mouseup', this._onMouseUp);
  }

  finish() {
    this._removeListener();
  }
}
