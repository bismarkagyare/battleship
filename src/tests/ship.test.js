import Ship from '../modules/ship';

describe('Ship', () => {
  let ship;

  // beforeEach to instantiate a ship object for test
  beforeEach(() => {
    ship = new Ship(3);
  });

  test('ship should have the correct length', () => {
    expect(ship.length).toBe(3);
  });

  test('ship should not be sunked initially', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('hit() should mark the corresponding cell as hit', () => {
    ship.hit(1);
    expect(ship.hits[1]).toBe(true);
  });

  test('isSunk() should return false if not all cells are hit', () => {
    ship.hit(0);
    ship.hit(2);
    expect(ship.isSunk()).toBe(false);
  });

  test('isSunk() should return true if all cells are hit', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
});
