class Game {
  constructor(turnLeft = 10) {
      this.turnLeft = turnLeft;
      this.characters = [];
      this.createCharacters();
      this.newTurn();
      this.showTurn();
  }

  createCharacters() {
    const fighter = new Fighter();
    console.log(`Notre fighter ${fighter.name} rejoint l'arène !`);
    console.log(fighter);

    const paladin = new Paladin();
    console.log(`Suivie de près par notre Paladin ${paladin.name}`);
    console.log(paladin);

    const monk = new Monk();
    console.log(`Arrive ensuite ${monk.name} THE MONK`);
    console.log(monk);

    const berzerker = new Berzerker();
    console.log(`Les rejoins alors ${berzerker.name} le Berzerker de la bande`);
    console.log(berzerker);

    const assassin = new Assassin();
    console.log(`Et enfin ${assassin.name} the famous Assassin`);
    console.log(assassin);

    this.characters.push(
      fighter,
      paladin,
      monk,
      berzerker,
      assassin,
    );

    console.log(`${fighter.name}`)
    console.log(`Nos ${this.characters.length} combattants sont prêts à en découdre !`);
  }

  newTurn() {
    if (this.turnLeft > 0){
      new Turn();
      this.turnLeft -= 1
    }
  }

  startTurn(){
    if (this.turnLeft > 0){
      console.log(`******* Tour ${10 - this.turnLeft} ********`)
    } else {
      console.log('La partie est terminée !')
    }
  }

  perform() {
    this.startTurn();
    while (this.turnLeft > 0) {
      const turn = new Turn(11 - this.turnLeft, this.characters);
      // turn.perform();
    }
    this.end();
  }

}



console.log('*****************************************')
console.log('****** Bienvenue sur notre jeu **********')
console.log('****** Seul le plus fort survivra  ******')
console.log('*****************************************')

const start_game = prompt("Tapes GAME pour commencer une partie");

switch(start_game){
  case 'GAME':
    const my_game = new Game();
    console.log(my_game)
    break;
  }


