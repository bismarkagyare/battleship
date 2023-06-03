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
});