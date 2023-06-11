class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(false);
  }

  hit(index) {
    this.hits[index] = true;
  }

  isSunk() {
    return this.hits.every((hit) => hit);
  }
}

export default Ship;
