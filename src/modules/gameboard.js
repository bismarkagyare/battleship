import Ship from './ship';
class Gameboard {
  constructor(size) {
    this.size = size;
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(coordinate) {
    if (coordinate >= 0 && coordinate < this.size && coordinate >= 0 && coordinate < this.size) {
      const newShip = new Ship(coordinate.length);
      this.ships.push(newShip);
    }
  }
}

export default Gameboard;
