import { TicTacToeFigureProps } from '../TicTacToeMiniGame';

export class TicTacToeCross {
  sectionSize: number;
  top: number;
  left: number;

  constructor({ params: { top, left }, sectionSize }: TicTacToeFigureProps) {
    this.sectionSize = sectionSize;
    this.top = top;
    this.left = left;
  }

  draw(context: CanvasRenderingContext2D) {
    const offset = 50;

    context.strokeStyle = '#F1BE32';

    context.beginPath();

    context.moveTo(this.left + offset, this.top + offset);
    context.lineTo(this.left + this.sectionSize - offset, this.top + this.sectionSize - offset);

    context.moveTo(this.left + offset, this.top + this.sectionSize - offset);
    context.lineTo(this.left + this.sectionSize - offset, this.top + offset);

    context.stroke();
  }
}
