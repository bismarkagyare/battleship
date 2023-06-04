import Gameboard from '../modules/gameboard';
import Ship from '../modules/ship';

describe('Gameboard', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard(10);
  });

  test('placing a ship on valid coordinates should add to the gameboard', () => {
    gameboard.placeShip(3, { column: 0, row: 0 }, 'horizontal');
    expect(gameboard.ships.length).toBe(1);
  });

  test('placing a ship on invalid coordintes should not add to the gameboard', () => {
    gameboard.placeShip(3, { column: 11, row: 2 }, 'horizontal');
    expect(gameboard.ships.length).toBe(0);
  });

  test('receiving an attack on a ship should register a hit', () => {
    const ship = new Ship(3);
    ship.coordinates = { column: 2, row: 3 };
    ship.orientation = 'horizontal';
    gameboard.ships.push(ship);

    gameboard.receiveAttacks({ column: 2, row: 3 });
    expect(ship.hits).toEqual([true, false, false]);
  });

  test('receiving an attack on a missed location should add to missedAttacks', () => {
    gameboard.receiveAttacks({ column: 5, row: 7 });
    expect(gameboard.missedAttacks.length).toBe(1);
  });

  test('checking if all ships are sunk should return true when all ships are sunk', () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(3);

    ship1.hits = [true, true];
    ship2.hits = [true, true, true];

    gameboard.ships.push(ship1, ship2);

    expect(gameboard.areAllShipsSunk()).toBe(true);
  });

  test('checking if all ships are sunk should return false when at least one ship is not sunk', () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(4);

    ship1.hits = [true, false, true];
    ship2.hits = [true, true, true, false];

    gameboard.ships.push(ship1, ship2);

    expect(gameboard.areAllShipsSunk()).toBe(false);
  });

  test('getting available attacks should return all valid coordinates', () => {
    gameboard.placeShip(2, { column: 1, row: 1 }, 'horizontal');
    gameboard.receiveAttacks({ column: 3, row: 2 });
    gameboard.receiveAttacks({ column: 4, row: 3 });

    const availableAttacks = gameboard.getAvailableAttacks();
    expect(availableAttacks).toEqual(
      expect.arrayContaining([
        { column: 0, row: 0 },
        { column: 1, row: 0 },
        { column: 2, row: 0 },
        // ... other valid coordinates
      ])
    );
  });

  test('checking if a move is valid should return if the coordinates are valid', () => {
    gameboard.placeShip(3, { column: 1, row: 1 }, 'horizontal');
    gameboard.receiveAttacks({ column: 2, row: 1 });

    const isValidMove = gameboard.isValidMove({ column: 3, row: 1 });
    expect(isValidMove).toBe(true);
  });

  test('checking if a move is valid should return false if the coordinates are invalid or already attacked', () => {
    gameboard.placeShip(3, { column: 1, row: 1 }, 'horizontal');
    gameboard.receiveAttacks({ column: 2, row: 1 });

    const isValidMove1 = gameboard.isValidMove({ column: -1, row: 5 });
    const isValidMove2 = gameboard.isValidMove({ column: 2, row: 1 });

    expect(isValidMove1).toBe(false);
    expect(isValidMove2).toBe(false);
  });
});
