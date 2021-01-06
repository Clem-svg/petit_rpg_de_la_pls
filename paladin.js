class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, status, name) {
      super(hp, dmg, mana, name, status);
      this.name = name;
  }

  attackHealingLighting(victim) {
    if (this.mana >= 40){
      this.mana -= 40;
      this.dealDamageDamage(victim, 4);
      this.hp += 5;
      console.log(`${this.name} utilise l'attaque Healing Lighting sur ${victim.name} qui a un peu le seum et perd 4 pts de vie. ${this.name} se soigne de 5pts parce que parfois la vie, c'est un kiwi`);
    } else {
      console.log('Déso jeune Paladin mais tu manques de mana, ça va partir en attaque normale. My game, my rules');
      this.dealDamage(victim, this.dmg);
    }
  }

}