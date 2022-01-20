import { Flask, PlayerSide } from './Flask';

export class FlasksController {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  flaskForFirstPlayer: Flask;
  flaskForSecondPlayer: Flask;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.flaskForFirstPlayer = this._createOpacityFlasks(PlayerSide.left, 'green');
    this.flaskForSecondPlayer = this._createOpacityFlasks(PlayerSide.right, 'blue');
  }

  fill(playerSide: PlayerSide, fill: number) {
    if (playerSide === PlayerSide.left) {
      this.flaskForFirstPlayer.fill(fill);
    } else {
      this.flaskForSecondPlayer.fill(fill);
    }
  }

  _createOpacityFlasks(playerSide: PlayerSide, color: string) {
    return new Flask({
      color: color,
      playerSide: playerSide,
      canvas: this.canvas,
      context: this.context,
    });
  }
}
