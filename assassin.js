class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status, name) {
      super(hp, dmg, mana, name, status);
      this.name = name;
  }

  attackShadowHit() {
  }
}