import { Flask } from './Flask';

export class FlasksController {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  flaskForFirstPlayer: Flask;
  flaskForSecondPlayer: Flask;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.flaskForFirstPlayer = this._createOpacityFlasks(true);
    this.flaskForSecondPlayer = this._createOpacityFlasks(true);
  }

  fill(leftSide: boolean, color: string, fill: number) {
    new Flask({
      color: color,
      leftSide: leftSide,
      canvas: this.canvas,
      context: this.context,
    }).fill(fill);
  }

  _createOpacityFlasks(leftSide: boolean) {
    return new Flask({
      color: 'rgba(139, 194, 255, 0.4)',
      leftSide: leftSide,
      canvas: this.canvas,
      context: this.context,
    });
  }
}
