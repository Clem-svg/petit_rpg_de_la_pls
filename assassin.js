class Assassin extends Character {
  constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status) {
    super(name, hp, dmg, mana, status);
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