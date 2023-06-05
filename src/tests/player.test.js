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

  test('should have a gameboard', () => {
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });

  test('should start with turn flags set to true and false', () => {
    expect(player.isPlayerTurn).toBe(true);
    expect(player.isComputerTurn).toBe(false);
  });

  test('should switch turns correctly', () => {
    player.switchTurns();
    expect(player.isPlayerTurn).toBe(false);
    expect(player.isComputerTurn).toBe(true);

    player.switchTurns();
    expect(player.isPlayerTurn).toBe(true);
    expect(player.isComputerTurn).toBe(false);
  });

  test('should generate valid coordinates for the computer', () => {
    const attackCoordinates = player.getComputerAttackCoordinates();
    expect(attackCoordinates).toBeDefined();
    expect(attackCoordinates.column).toBeGreaterThanOrEqual(0);
    expect(attackCoordinates.column).toBeLessThanOrEqual(gameboard.size);
    expect(attackCoordinates.row).toBeGreaterThanOrEqual(0);
    expect(attackCoordinates.row).toBeLessThanOrEqual(gameboard.size);
  });
});
