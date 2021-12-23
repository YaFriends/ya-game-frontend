import { UserData } from '../../../@types/UserTypes';

export type BehaviorProps = {
  user: UserData;
  canvas: HTMLCanvasElement;
  addPointEvent: CustomEvent;
};

export abstract class Behavior {
  user: UserData;
  clickCount: number;
  step: number;
  addPointEvent: CustomEvent;
  canvas: HTMLCanvasElement;

  protected constructor({ user, canvas, addPointEvent }: BehaviorProps) {
    this.user = user;
    this.clickCount = 0;
    this.step = 5;
    this.canvas = canvas;
    this.addPointEvent = addPointEvent;
  }

  protected addPoint() {
    this.clickCount += this.step;
    this.canvas.dispatchEvent(this.addPointEvent);
  }

  protected abstract finish(): void;
}
