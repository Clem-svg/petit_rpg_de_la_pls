class Game {
  constructor(turnLeft = 10) {
      this.turnLeft = turnLeft;
  }

  newTurn() {
    if (this.turnLeft > 0){
      new Turn.startTurn();
      this.turnLeft -= 1
    } else {
      console.log('La partie est terminée !')
    }
  }
}

console.log('*****************************************')
console.log('****** Bienvenue sur notre jeu **********')
console.log('****** Seul le plus fort survivra  ******')
console.log('*****************************************')
