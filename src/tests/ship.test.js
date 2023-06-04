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

  test('getIndexOfCell returns the correct index for a horizontal ship', () => {
    ship.coordinates = { column: 2, row: 3 };
    ship.orientation = 'horizontal';
    expect(ship.getIndexOfCell(4, 3)).toBe(2);
    expect(ship.getIndexOfCell(3, 3)).toBe(1);
    expect(ship.getIndexOfCell(1, 3)).toBe(-1); // outside the ship's range
  });

  test('getIndexOfCell returns the correct index for a vertical ship', () => {
    ship.coordinates = { column: 5, row: 2 };
    ship.orientation = 'vertical';
    expect(ship.getIndexOfCell(5, 3)).toBe(1);
    expect(ship.getIndexOfCell(5, 4)).toBe(2);
    expect(ship.getIndexOfCell(0, 0)).toBe(-1); // outside the ship's range
  });
});
