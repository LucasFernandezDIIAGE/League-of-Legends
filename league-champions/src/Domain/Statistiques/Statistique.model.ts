export class Statistique {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  
    constructor(
      hp: number,
      hpperlevel: number,
      mp: number,
      mpperlevel: number,
      movespeed: number,
      armor: number,
      armorperlevel: number,
      spellblock: number,
      spellblockperlevel: number,
      attackrange: number,
      hpregen: number,
      hpregenperlevel: number,
      mpregen: number,
      mpregenperlevel: number,
      crit: number,
      critperlevel: number,
      attackdamage: number,
      attackdamageperlevel: number,
      attackspeedperlevel: number,
      attackspeed: number
    ) {
      this.hp = hp;
      this.hpperlevel = hpperlevel;
      this.mp = mp;
      this.mpperlevel = mpperlevel;
      this.movespeed = movespeed;
      this.armor = armor;
      this.armorperlevel = armorperlevel;
      this.spellblock = spellblock;
      this.spellblockperlevel = spellblockperlevel;
      this.attackrange = attackrange;
      this.hpregen = hpregen;
      this.hpregenperlevel = hpregenperlevel;
      this.mpregen = mpregen;
      this.mpregenperlevel = mpregenperlevel;
      this.crit = crit;
      this.critperlevel = critperlevel;
      this.attackdamage = attackdamage;
      this.attackdamageperlevel = attackdamageperlevel;
      this.attackspeedperlevel = attackspeedperlevel;
      this.attackspeed = attackspeed;
    }
  }
  