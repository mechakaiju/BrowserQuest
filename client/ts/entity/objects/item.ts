import {Entity} from '../entity';
import {Types} from '../../gametypes';

export class Item extends Entity {

  itemKind;
  type;
  wasDropped = false;
  lootMessage;

  constructor(id, kind, type?) {
    super(id, kind);

    this.itemKind = Types.getKindAsString(kind);
    this.type = type;
  }

  hasShadow() {
    return true;
  }

  onLoot(player) {
    if (this.type === 'weapon') {
      player.switchWeapon(this.itemKind);
    }
    else if (this.type === 'armor') {
      player.armorloot_callback(this.itemKind);
    }
  }

  getSpriteName() {
    return 'item-' + this.itemKind;
  }

  getLootMessage() {
    return this.lootMessage;
  }
}
