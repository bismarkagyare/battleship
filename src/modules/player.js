import Gameboard from './gameboard';

class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard || new Gameboard(10);
    this.isPlayerTurn = true;
    this.isComputerTurn = false;
  }

  makeAttack() {
    const attackCoordinates = this.isPlayerTurn
      ? this.getPlayerAttackCoordinates()
      : this.getComputerAttackCoordinates();

    this.gameboard.receiveAttacks(attackCoordinates);
    this.switchTurns();
  }

  //gonna pull it from the dom.js or html: depends
  getPlayerAttackCoordinates() {}

  getComputerAttackCoordinates() {
    const randomColumn = Math.floor(Math.random() * this.gameboard.size);
    const randomRow = Math.floor(Math.random() * this.gameboard.size);
    const attackCoordinates = { column: randomColumn, row: randomRow };
    return attackCoordinates;
  }

  switchTurns() {
    this.isPlayerTurn = !this.isPlayerTurn;
    this.isComputerTurn = !this.isComputerTurn;
  }
}

export default Player;
