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
}

export default Ship;
