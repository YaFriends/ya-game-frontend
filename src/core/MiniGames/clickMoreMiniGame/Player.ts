import { Behavior, BehaviorProps } from './Behavior';

export class Player extends Behavior {
  constructor(props: BehaviorProps) {
    super(props);
  }
  _onMouseUp = () => {
    this.addPoint();
  };

  run() {
    this._addListener();
  }

  _addListener() {
    this.canvas.addEventListener('mouseup', this._onMouseUp);
  }

  _removeListener() {
    this.canvas.removeEventListener('mouseup', this._onMouseUp);
  }

  finish() {
    this._removeListener();
  }
}
