import { Behavior, BehaviorProps } from './Behavior';

export class Opponent extends Behavior {
  interval: number;
  clickingSpeed: number;
  constructor(props: BehaviorProps) {
    super(props);
    this.interval = 0;
    this.clickingSpeed = 300;
  }

  run() {
    this._startClicking();
  }

  _addPoint = () => {
    this.addPoint();
  };

  _startClicking() {
    this.interval = window.setInterval(this._addPoint, this.clickingSpeed);
  }

  _clearInterval() {
    clearInterval(this.interval);
  }

  finish() {
    this._clearInterval();
  }
}
