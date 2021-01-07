class Fighter extends Character {
  constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status) {
    super(name, hp, dmg, mana, status);
  }

  attackDarkVision(victim) {
  if (this.mana >= 20){
    this.mana -= 20;
    this.dealDamage(victim, 5);
    console.log(`${this.name} utilise l'attaque Dark Vision sur ${victim.name}. ${victim.name} perd 5pts de vie ! ${this.name} gagne 2àpts de mana !`);
    } else {
    console.log('Not enough mana pour faire ça, déso mais ça part en attaque de BASE');
    this.dealDamage(victim, this.dmg);
    }
  }
}