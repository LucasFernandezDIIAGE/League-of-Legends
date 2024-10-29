import {Skin} from '../Skins/Skin.model'
import { Categorie } from '../Categories/Categorie.model';

export class Champion{
    id: Number;
    nom: string;
    titre: string;
    categorie: Categorie[];
    skins: Skin[];

    constructor(id: Number, nom: string, titre: string, categorie: Categorie[], skins: Skin[]){
        this.id = id;
        this.nom = nom;
        this.titre = titre;
        this.categorie = categorie;
        this.skins = skins
    }
}

export class Info {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  
    constructor(attack: number, defense: number, magic: number, difficulty: number) {
      this.attack = attack;
      this.defense = defense;
      this.magic = magic;
      this.difficulty = difficulty;
    }
  }
  
  export class Stats {
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
  
    constructor(stats: any) {
      this.hp = stats.hp;
      this.hpperlevel = stats.hpperlevel;
      this.mp = stats.mp;
      this.mpperlevel = stats.mpperlevel;
      this.movespeed = stats.movespeed;
      this.armor = stats.armor;
      this.armorperlevel = stats.armorperlevel;
      this.spellblock = stats.spellblock;
      this.spellblockperlevel = stats.spellblockperlevel;
      this.attackrange = stats.attackrange;
      this.hpregen = stats.hpregen;
      this.hpregenperlevel = stats.hpregenperlevel;
      this.mpregen = stats.mpregen;
      this.mpregenperlevel = stats.mpregenperlevel;
      this.crit = stats.crit;
      this.critperlevel = stats.critperlevel;
      this.attackdamage = stats.attackdamage;
      this.attackdamageperlevel = stats.attackdamageperlevel;
      this.attackspeedperlevel = stats.attackspeedperlevel;
      this.attackspeed = stats.attackspeed;
    }
  }
  
  export class Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  
    constructor(image: any) {
      this.full = image.full;
      this.sprite = image.sprite;
      this.group = image.group;
      this.x = image.x;
      this.y = image.y;
      this.w = image.w;
      this.h = image.h;
    }
  }
  