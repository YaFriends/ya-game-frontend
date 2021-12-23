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
    this._draw();
  }

  _draw(color = 'rgba(139, 194, 255, 0.4)') {
    const { height, width } = this.canvas.getBoundingClientRect();
    const x = this.leftSide ? this.canvas.clientLeft : width;
    this.context.strokeStyle = color;
    this.context.lineWidth = 30;
    this.context.beginPath();
    this.context.moveTo(x, height - this.margin);
    this.context.lineTo(x, this.margin);
    this.context.stroke();
  }

  fill(lineToY: number) {
    const gradient = this.context.createLinearGradient(0, this.canvas.height, 0, 0);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(lineToY / 100, 'green');
    gradient.addColorStop(lineToY / 100, 'rgba(139, 194, 255, 0.4)');
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 500, 10, 10);
  }
}
