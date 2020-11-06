import {Npc} from './npc';
import {Types} from '../../../gametypes';

export const NPCs = {

  Guard: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.GUARD);
    }
  },

  King: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.KING);
    }
  },

  Agent: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.AGENT);
    }
  },

  Rick: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.RICK);
    }
  },

  VillageGirl: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.VILLAGEGIRL);
    }
  },

  Villager: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.VILLAGER);
    }
  },

  Coder: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.CODER);
    }
  },

  Scientist: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.SCIENTIST);
    }
  },

  Nyan: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.NYAN);
      this.idleSpeed = 50;
    }
  },

  Sorcerer: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.SORCERER);
      this.idleSpeed = 150;
    }
  },

  Priest: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.PRIEST);
    }
  },

  BeachNpc: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.BEACHNPC);
    }
  },

  ForestNpc: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.FORESTNPC);
    }
  },

  DesertNpc: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.DESERTNPC);
    }
  },

  LavaNpc: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.LAVANPC);
    }
  },

  Octocat: class Guard extends Npc {
    constructor(id) {
      super(id, Types.Entities.OCTOCAT);
    }
  }
};
