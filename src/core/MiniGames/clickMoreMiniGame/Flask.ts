export type FlaskProps = {
  color: string;
  leftSide: boolean;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};

export class Flask {
  color: string;
  leftSide: boolean;
  margin: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor({ color, leftSide, canvas, context }: FlaskProps) {
    this.canvas = canvas;
    this.context = context;
    this.color = color;
    this.leftSide = leftSide;
    this.margin = 10;
    this._draw('rgba(139, 194, 255, 0.4)', 10);
  }

  _draw(color: string, lineToY: number) {
    const { height, width } = this.canvas.getBoundingClientRect();
    const margin = 10;
    const x = this.leftSide ? this.canvas.clientLeft : width;
    this.context.strokeStyle = color;
    this.context.lineWidth = 30;
    this.context.beginPath();
    this.context.moveTo(x, height - margin);
    this.context.lineTo(x, lineToY);
    this.context.stroke();
  }

  fill(lineToY: number) {
    this._draw(this.color, lineToY);
  }
}
