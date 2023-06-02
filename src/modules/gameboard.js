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
        const checkOverlap = (rowOffset, columnOffset) => {
          for (let i = 0; i < length; i++) {
            const shipRow = ship.coordinates.row + rowOffset * i;
            const shipColumn = ship.coordinates.column + columnOffset * i;
            if (shipRow === row && shipColumn === column) {
              return true;
            }
          }
          return false;
        };
        return (
          (orientation === 'horizontal' && checkOverlap(0, 1)) || (orientation === 'vertical' && checkOverlap(1, 0))
        );
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

  receiveAttacks(attackCoordinates) {
    const { column, row } = attackCoordinates;
    if (row >= 0 && row < this.size && column >= 0 && column < this.size) {
      let isHit = false;

      for (const ship of this.ships) {
        if (ship.coordinates.row === row && ship.coordinates.column === column) {
          const cellIndex = ship.getIndexOfCell(row, column);
          ship.hit(cellIndex);
          isHit = true;
          break; // Exit the loop after finding a hit
        }
      }
      if (isHit === false) {
        this.missedAttacks.push(attackCoordinates);
      }

      return isHit;
    } else {
      console.log('invalid attack coordinates');
      return false;
    }
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  isValidMove(coordinates) {
    const { column, row } = coordinates;
    if (row >= 0 && row < this.size && column >= 0 && column < this.size) {
      const isAlreadyAttacked = this.missedAttacks.some((attack) => {
        return attack.row === row && attack.column === column;
      });
      if (!isAlreadyAttacked) {
        return true;
      }
    }
    return false;
  }
}

export default Gameboard;
