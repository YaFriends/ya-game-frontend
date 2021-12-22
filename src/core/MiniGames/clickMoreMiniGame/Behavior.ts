import { UserData } from '../../../@types/UserTypes';
import { BehaviorProps } from '../ClickMoreMiniGame';

import { Flask } from './Flask';

export type FlaskProps = {
  color: string;
  lineToY: number;
  leftSide: boolean;
};

export abstract class Behavior {
  user: UserData;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  clickCount: number;
  step: number;
  color: string;
  leftSide: boolean;
  addPointEvent: CustomEvent;

  protected constructor({
    user,
    context,
    canvas,
    color,
    isLeftSide,
    addPointEvent,
  }: BehaviorProps) {
    this.user = user;
    this.context = context;
    this.canvas = canvas;
    this.clickCount = 0;
    this.step = 30;
    this.color = color;
    this.leftSide = isLeftSide;
    this.addPointEvent = addPointEvent;
  }

  draw() {
    new Flask({
      color: 'rgba(139, 194, 255, 0.4)',
      leftSide: this.leftSide,
      lineToY: 10,
    }).draw(this.context, this.canvas);
    this.addPoint();
  }

  protected addPoint() {
    this.canvas.addEventListener('addPointEvent', () => {
      console.log('finished');
    });
  }
}
