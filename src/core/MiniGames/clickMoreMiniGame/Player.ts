import { BehaviorProps } from '../ClickMoreMiniGame';

import { Behavior } from './Behavior';
import { Flask } from './Flask';

export class Player extends Behavior {
  constructor(props: BehaviorProps) {
    super(props);
  }

  protected addPoint() {
    super.addPoint();
    this._addListener();
  }

  _onMouseUp = () => {
    this.clickCount += this.step;
    const duration = this.canvas.height - this.clickCount;
    if (this.clickCount >= this.canvas.height) {
      return this.canvas.dispatchEvent(this.addPointEvent);
    }
    return new Flask({
      color: this.color,
      leftSide: this.leftSide,
      lineToY: duration,
    }).draw(this.context, this.canvas);
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
