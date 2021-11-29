import { TicTacToeFigureProps } from '../TicTacToeMiniGame';

export class TicTacToeCircle {
  sectionSize: number;
  top: number;
  left: number;

  constructor({ params: { top, left }, sectionSize }: TicTacToeFigureProps) {
    this.sectionSize = sectionSize;
    this.top = top;
    this.left = left;
  }

  draw(context: CanvasRenderingContext2D) {
    const halfSectionSize = 0.5 * this.sectionSize;
    const centerX = this.left + halfSectionSize;
    const centerY = this.top + halfSectionSize;
    const radius = (this.sectionSize - 100) / 2;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;

    context.lineWidth = 10;
    context.strokeStyle = '#01BBC2';
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.stroke();
  }
}
