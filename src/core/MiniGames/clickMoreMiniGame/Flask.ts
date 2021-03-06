export type FlaskProps = {
  color: string;
  playerSide: PlayerSide;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};

export enum PlayerSide {
  'left',
  'right',
}

export class Flask {
  color: string;
  playerSide: PlayerSide;
  margin: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor({ color, playerSide, canvas, context }: FlaskProps) {
    this.canvas = canvas;
    this.context = context;
    this.color = color;
    this.playerSide = playerSide;
    this.margin = 10;
    this._draw();
  }

  _draw() {
    const { height, width } = this.canvas.getBoundingClientRect();
    const x = this.playerSide === PlayerSide.left ? this.canvas.clientLeft : width;
    this.context.strokeStyle = 'rgba(139, 194, 255, 0.4)';
    this.context.lineWidth = 30;
    this.context.beginPath();
    this.context.moveTo(x, height - this.margin);
    this.context.lineTo(x, this.margin);
    this.context.stroke();
  }

  fill(lineToY: number) {
    if (lineToY > 100) {
      lineToY = 100;
    }
    const { height, width } = this.canvas.getBoundingClientRect();
    const x = this.playerSide === PlayerSide.left ? this.canvas.clientLeft : width;
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.moveTo(x, height - (((height - 2 * this.margin) / 100) * lineToY + this.margin));
    this.context.lineTo(x, height - this.margin);
    this.context.stroke();
  }
}
