import {Item} from './item';
import {Types} from '../../gametypes';

export class Chest extends Item {

  open_callback;

  constructor(id, kind?) {
    super(id, Types.Entities.CHEST);
  }

  getSpriteName() {
    return 'chest';
  }

  isMoving() {
    return false;
  }

  open() {
    if (this.open_callback) {
      this.open_callback();
    }
  }

  onOpen(callback) {
    this.open_callback = callback;
  }
}
