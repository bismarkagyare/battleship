import Player from '../modules/player';
import Gameboard from '../modules/gameboard';

describe('Player', () => {
  let player;
  let gameboard;

  beforeEach(() => {
    player = new Player('Bismark');
    gameboard = new Gameboard(10);
  });

  test('should have a name', () => {
    expect(player.name).toBe('Bismark');
  });
});
