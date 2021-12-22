import { FlaskProps } from './Action';

export class Flask {
  color: string;
  lineToY: number;
  leftSide: boolean;
  margin: number;

  constructor({ color, lineToY, leftSide }: FlaskProps) {
    this.color = color;
    this.lineToY = lineToY;
    this.leftSide = leftSide;
    this.margin = 10;
  }

  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const { left, height, width } = canvas.getBoundingClientRect();
    console.log(left, height);
    const margin = 10;
    const x = this.leftSide ? canvas.clientLeft : width;
    context.strokeStyle = this.color;
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(x, height - margin);
    context.lineTo(x, this.lineToY);
    context.stroke();
  }
}
