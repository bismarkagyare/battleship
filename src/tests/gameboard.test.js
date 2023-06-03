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
});
