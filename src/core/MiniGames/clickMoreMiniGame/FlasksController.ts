import { Flask } from './Flask';

export class FlasksController {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  flaskForFirstPlayer: Flask;
  flaskForSecondPlayer: Flask;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.flaskForFirstPlayer = this._createOpacityFlasks(true, 'green');
    this.flaskForSecondPlayer = this._createOpacityFlasks(false, 'blue');
  }

  fill(leftSide: boolean, fill: number) {
    if (leftSide) {
      this.flaskForFirstPlayer.fill(fill);
    } else {
      this.flaskForSecondPlayer.fill(fill);
    }
  }

  _createOpacityFlasks(leftSide: boolean, color: string) {
    return new Flask({
      color: color,
      leftSide: leftSide,
      canvas: this.canvas,
      context: this.context,
    });
  }
}
