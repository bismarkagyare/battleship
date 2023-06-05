import Gameboard from './gameboard';

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard(10);
    this.isPlayerTurn = false;
    this.isComputerTurn = false;
  }

  makeAttack(gameboard) {
    if (this.isPlayerTurn) {
      const attackCoordinates = this.getPlayerAttackCoordinates();
      gameboard.receiveAttacks(attackCoordinates);
    } else if (this.isComputerTurn) {
      const attackCoordinates = this.getComputerAttackCoordinates;
      gameboard.receiveAttacks(attackCoordinates);
    }
    this.switchTurns();
  }

  getPlayerAttackCoordinates() {}

  getComputerAttackCoordinates() {
    const randomColumn = Math.floor(Math.random() * this.gameboard.size);
    const randomRow = Math.floor(Math.random() * this.gameboard.size);
    const attackCoordinates = { column: randomColumn, row: randomRow };
    return attackCoordinates;
  }

  switchTurns() {}
}

export default Player;
