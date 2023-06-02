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

      const overlappingShip = this.ships.find((ship) => {
        if (orientation === 'horizontal') {
          for (let i = 0; i < length; i++) {
            if (ship.coordinates.row === row && ship.coordinates.column + i === column) {
              return true;
            } else if (orientation === 'vertical') {
              for (let i = 0; i < length; i++) {
                if (ship.coordinates.row + i === row && ship.coordinates.column === column) {
                  return true;
                }
              }
            }
          }
          return false;
        }
      });

      if (!overlappingShip) {
        newShip.coordinates = { column, row };
        newShip.orientation = orientation;
        this.ships.push(newShip);
      } else {
        console.log('there was an overlap');
      }
    } else {
      console.log('invalid coordinates or orientation');
    }
  }

  receiveAttacks(attackCoordinates, coordinates) {
    const { column, row } = coordinates;
    if (row >= 0 && row < this.size && column >= 0 && column < this.size) {
      const hitsShips = this.ships.find((ship) => {
        if (ship.coordinates === attackCoordinates) {
          ship.hit(attackCoordinates);
        } else {
          this.missedAttacks.push(attackCoordinates);
        }
      });
      return hitsShips;
    }
  }
}

export default Gameboard;
