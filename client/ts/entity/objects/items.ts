import {Types} from '../../gametypes';
import {Item} from './item';


export const Items = {

  Sword2: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.SWORD2, 'weapon');
      this.lootMessage = 'You pick up a steel sword';
    }
  },

  Axe: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.AXE, 'weapon');
      this.lootMessage = 'You pick up an axe';
    }
  },

  RedSword: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.REDSWORD, 'weapon');
      this.lootMessage = 'You pick up a blazing sword';
    }
  },

  BlueSword: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.BLUESWORD, 'weapon');
      this.lootMessage = 'You pick up a magic sword';
    }
  },

  GoldenSword: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.GOLDENSWORD, 'weapon');
      this.lootMessage = 'You pick up the ultimate sword';
    }
  },

  MorningStar: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.MORNINGSTAR, 'weapon');
      this.lootMessage = 'You pick up a morning star';
    }
  },

  LeatherArmor: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.LEATHERARMOR, 'armor');
      this.lootMessage = 'You equip a leather armor';
    }
  },

  MailArmor: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.MAILARMOR, 'armor');
      this.lootMessage = 'You equip a mail armor';
    }
  },

  PlateArmor: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.PLATEARMOR, 'armor');
      this.lootMessage = 'You equip a plate armor';
    }
  },

  RedArmor: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.REDARMOR, 'armor');
      this.lootMessage = 'You equip a ruby armor';
    }
  },

  GoldenArmor: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.GOLDENARMOR, 'armor');
      this.lootMessage = 'You equip a golden armor';
    }
  },

  Flask: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.FLASK, 'object');
      this.lootMessage = 'You drink a health potion';
    }
  },

  Cake: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.CAKE, 'object');
      this.lootMessage = 'You eat a cake';
    }
  },

  Burger: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.BURGER, 'object');
      this.lootMessage = 'You can haz rat burger';
    }
  },

  FirePotion: class Sowrd2 extends Item {
    constructor(id) {
      super(id, Types.Entities.FIREPOTION, 'object');
      this.lootMessage = 'You feel the power of Firefox!';
    }

    onLoot(player) {
      player.startInvincibility();
    }
  },
};
