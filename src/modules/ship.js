class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunkStatus = false;
  }

  hit() {
    ++this.hits;
  }

  isSunk() {
    return this.length === this.hits;
  }
}

export default Ship;
