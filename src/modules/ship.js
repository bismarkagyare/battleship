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

  getIndexOfCell(column, row) {
    const columnIndex = column - this.coordinates.column;
    const rowIndex = row - this.coordinates.row;

    if (this.orientation === 'horizontal' && rowIndex === 0) {
      return columnIndex >= 0 && columnIndex < this.length ? columnIndex : -1;
    } else if (this.orientation === 'vertical' && columnIndex === 0) {
      return rowIndex >= 0 && rowIndex < this.length ? rowIndex : -1;
    }

    return -1;
  }
}

export default Ship;
