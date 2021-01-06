class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, status, name) {
      super(hp, dmg, mana, name, status);
      this.name = name;
  }

  attackRage() {
  this.dmg += 1;
  this.hp -= 1;
  console.log(`${this.name} utilise l'attaque Rage. A présent, ses attaques risquent de picôter de ${this.dmg} points`);

  }
}