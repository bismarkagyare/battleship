class Ship {
  constructor(length) {
    this.length = length;
    this.hits = new Array(length).fill(false);
  }

  hit(index) {
    this.hits[index] = true;
  }

  isSunk() {
    return this.hits.every((cell) => cell === true);
  }

  // getIndexOfCell(row, column) {
  //   const { length } = this;
  //   const startColumn = this.coordinates.column;
  //   const startRow = this.coordinates.row;

  //   if (this.orientation === 'horizontal') {
  //     return column - startColumn;
  //   } else if (this.orientation === 'vertical') {
  //     return row - startRow;
  //   }
  //   return -1;
  // }

  getIndexOfCell(row, column) {
    const startColumn = this.coordinates.column;
    const startRow = this.coordinates.row;
    const index = this.orientation === 'horizontal' ? column - startColumn : row - startRow;

    return index >= 0 && index < this.length ? index : -1;
  }
}

export default Ship;
