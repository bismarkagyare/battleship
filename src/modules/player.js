import Gameboard from './gameboard';

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard(10);
    this.isPlayerTurn = false;
  }

  makeAttack(gameboard) {
    if (this.isPlayerTurn) {
      const attackCoordinates = this.getPlayerAttackCoordinates();
    }
  }
}

export default Player;
