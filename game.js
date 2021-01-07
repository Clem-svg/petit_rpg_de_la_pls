class Game {
  constructor() {
      super(turnLeft = 10);
      this.turnLeft = this.turnLeft;
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