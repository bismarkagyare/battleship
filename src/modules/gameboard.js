import Ship from './ship';
class Gameboard {
  constructor(size) {
    this.size = size;
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(length, coordinates, orientation) {
    const { column, row } = coordinates;

    if (
      row >= 0 &&
      row < this.size &&
      column >= 0 &&
      column < this.size &&
      (orientation === 'vertical' || orientation === 'horizontal')
    ) {
      const newShip = new Ship(length);
      // check for overlap with existing ships

      const overlappingShip = this.ships.find((ship) => {});
    }
  }
}

export default Gameboard;
