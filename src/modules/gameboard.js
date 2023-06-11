class Gameboard {
  constructor(size) {
    this.size = size;
    this.grid = this.createGrid();
  }

  createGrid() {
    const grid = [];

    for (let row = 0; row < this.size; row++) {
      const rowCells = [];
      for (let col = 0; col < this.size; col++) {
        rowCells.push({ ship: null, isAttacked: false });
      }
      grid.push(rowCells);
    }

    return grid;
  }

  placeShip(ship, startRow, startCol, orientation) {
    const endRow = orientation === 'vertical' ? startRow + ship.length - 1 : startRow;
    const endCol = orientation === 'horizontal' ? startCol + ship.length - 1 : startCol;

    if (!this.isValidPosition(startRow, startCol, endRow, endCol)) {
      return false;
    }

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        this.grid[row][col].ship = ship;
        this.grid[row][col].orientation = orientation;
      }
    }

    return true;
  }

  isValidPosition(startRow, startCol, endRow, endCol) {
    if (
      startRow < 0 ||
      startRow >= this.size ||
      startCol < 0 ||
      startCol >= this.size ||
      endRow < 0 ||
      endRow >= this.size ||
      endCol < 0 ||
      endCol >= this.size
    ) {
      return false;
    }

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        if (this.grid[row][col].ship !== null) {
          return false;
        }
      }
    }

    return true;
  }

  getShipAt(row, col) {
    return this.grid[row][col].ship;
  }

  getOrientationAt(row, col) {
    return this.grid[row][col].orientation;
  }
}

export default Gameboard;
