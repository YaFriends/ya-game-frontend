import { BehaviorProps } from '../ClickMoreMiniGame';

import { Behavior } from './Behavior';

export class Player extends Behavior {
  constructor(props: BehaviorProps) {
    super(props);
    this._addListener();
  }

  _onMouseUp = () => {
    this.addPoint();
  };

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
