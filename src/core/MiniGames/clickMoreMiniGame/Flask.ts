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

  _draw(color?: string, lineToY?: number) {
    const { height, width } = this.canvas.getBoundingClientRect();
    // const duration = this.canvas.height - lineToY;

    const x = this.leftSide ? this.canvas.clientLeft : width;
    // this.context.strokeStyle = color;
    this.context.lineWidth = 30;
    const gradient = this.context.createLinearGradient(0, 0, 0, lineToY);
    gradient.addColorStop(0, 'rgba(139, 194, 255, 0.4)');
    this.context.strokeStyle = gradient;
    this.context.beginPath();
    this.context.moveTo(x, height - this.margin);
    this.context.lineTo(x, lineToY);
    this.context.stroke();
  }

  fill(lineToY: number) {
    const gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0, 'rgba(139, 194, 255, 0.4)');
    gradient.addColorStop(lineToY / 100, 'green');
    this.context.strokeStyle = gradient;
  }
}
