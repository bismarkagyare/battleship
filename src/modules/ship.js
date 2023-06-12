class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(false);
    this.row = null;
    this.column = null;
  }

  hit(index) {
    this.hits[index] = true;
  }

  isSunk() {
    return this.hits.every((hit) => hit);
  }

  getPosition() {
    return { row: this.row, column: this.column };
  }

  setPosition(row, column) {
    this.row = row;
    this.column = column;
  }
}

export default Ship;
