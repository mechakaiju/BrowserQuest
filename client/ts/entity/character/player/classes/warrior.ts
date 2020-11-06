import {Player} from '../player';
import {Types} from '../../../../gametypes';

export class Warrior extends Player {
  constructor(id, name) {
    super(id, name, Types.Entities.WARRIOR);
  }
}
