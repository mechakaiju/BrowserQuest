import {Types} from '../../../gametypes';
import {Mob} from './mob';
import {Timer} from '../../../utils/timer';


export const Mobs = {
  Rat: class Rat extends Mob {
    constructor(id) {
      super(id, Types.Entities.RAT);
      this.moveSpeed = 350;
      this.idleSpeed = 700;
      this.shadowOffsetY = -2;
      this.isAggressive = false;
    }
  },

  Skeleton: class Skeleton extends Mob {
    constructor (id) {
      super(id, Types.Entities.SKELETON);
      this.moveSpeed = 350;
      this.atkSpeed = 100;
      this.idleSpeed = 800;
      this.shadowOffsetY = 1;
      this.setAttackRate(1300);
    }
  },

  Skeleton2: class Skeleton2 extends Mob {
    constructor (id) {
      super(id, Types.Entities.SKELETON2);
      this.moveSpeed = 200;
      this.atkSpeed = 100;
      this.idleSpeed = 800;
      this.walkSpeed = 200;
      this.shadowOffsetY = 1;
      this.setAttackRate(1300);
    }
  },

  Spectre: class Spectre extends Mob {
    constructor (id) {
      super(id, Types.Entities.SPECTRE);
      this.moveSpeed = 150;
      this.atkSpeed = 50;
      this.idleSpeed = 200;
      this.walkSpeed = 200;
      this.shadowOffsetY = 1;
      this.setAttackRate(900);
    }
  },

  Deathknight: class Deathknight extends Mob {
    constructor (id) {
      super(id, Types.Entities.DEATHKNIGHT);
      this.atkSpeed = 50;
      this.moveSpeed = 220;
      this.walkSpeed = 100;
      this.idleSpeed = 450;
      this.setAttackRate(800);
      this.aggroRange = 3;
    }

    idle (orientation) {
      if (!this.hasTarget()) {
        super.idle(Types.Orientations.DOWN);
      } else {
        super.idle(orientation);
      }
    }
  },

  Goblin: class Goblin extends Mob {
    constructor (id) {
      super(id, Types.Entities.GOBLIN);
      this.moveSpeed = 150;
      this.atkSpeed = 60;
      this.idleSpeed = 600;
      this.setAttackRate(700);
    }
  },

  Ogre: class Ogre extends Mob {
    constructor (id) {
      super(id, Types.Entities.OGRE);
      this.moveSpeed = 300;
      this.atkSpeed = 100;
      this.idleSpeed = 600;
    }
  },

  Crab: class Crab extends Mob {
    constructor (id) {
      super(id, Types.Entities.CRAB);
      this.moveSpeed = 200;
      this.atkSpeed = 40;
      this.idleSpeed = 500;
    }
  },

  Snake: class Snake extends Mob {
    constructor (id) {
      super(id, Types.Entities.SNAKE);
      this.moveSpeed = 200;
      this.atkSpeed = 40;
      this.idleSpeed = 250;
      this.walkSpeed = 100;
      this.shadowOffsetY = -4;
    }
  },

  Eye: class Eye extends Mob {
    constructor (id) {
      super(id, Types.Entities.EYE);
      this.moveSpeed = 200;
      this.atkSpeed = 40;
      this.idleSpeed = 50;
    }
  },

  Bat: class Bat extends Mob {
    constructor(id) {
      super(id, Types.Entities.BAT);
      this.moveSpeed = 120;
      this.atkSpeed = 90;
      this.idleSpeed = 90;
      this.walkSpeed = 85;
      this.isAggressive = false;
    }
  },

  Wizard: class Wizard extends Mob {
    constructor (id) {
      super(id, Types.Entities.WIZARD);
      this.moveSpeed = 200;
      this.atkSpeed = 100;
      this.idleSpeed = 150;
    }
  },

  Boss: class Boss extends Mob {
    constructor (id) {
      super(id, Types.Entities.BOSS);
      this.moveSpeed = 300;
      this.atkSpeed = 50;
      this.idleSpeed = 400;
      this.setAttackRate(2000);
      this.aggroRange = 3;
    }

    idle (orientation) {
      if (!this.hasTarget()) {
        super.idle(Types.Orientations.DOWN);
      } else {
        super.idle(orientation);
      }
    }
  }
};
