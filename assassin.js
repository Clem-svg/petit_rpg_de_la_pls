class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status, name) {
      super(hp, dmg, mana, name, status);
      this.name = name;
  }

  attackShadowHit(victim) {
    if (this.mana >= 20){
      this.dealDamage(victim, 7);
        if (victim.status != "Looser"){
          this.hp -= 7;
        }
    }
  }
}