import { Behavior, BehaviorProps } from './Behavior';

export class Opponent extends Behavior {
  interval: number;
  constructor(props: BehaviorProps) {
    super(props);
    this.interval = 0;
  }

  run() {
    this._startClicking();
  }

  _addPoint = () => {
    this.addPoint();
  };

  _startClicking() {
    this.interval = window.setInterval(this._addPoint, 300);
  }

  _clearInterval() {
    clearInterval(this.interval);
  }

  finish() {
    this._clearInterval();
  }
}
