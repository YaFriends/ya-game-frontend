import { Flask } from './Flask';

export class FlasksController {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
  }

  run() {
    this._createOpacityFlasks(true);
    this._createOpacityFlasks(false);
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
    new Flask({
      color: 'rgba(139, 194, 255, 0.4)',
      leftSide: leftSide,
      canvas: this.canvas,
      context: this.context,
    });
  }
}
