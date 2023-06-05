import Player from '../modules/player';
import Gameboard from '../modules/gameboard';

describe('Player', () => {
  let player;
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard(10);
    player = new Player('Bismark');
    player.gameboard = gameboard;
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

  //use mocking in jest to test makeAttack() method

  test('should attack computer grid with player attack coordinates', () => {
    // Mock the getPlayerAttackCoordinates() method to return specific coordinates
    player.getPlayerAttackCoordinates = jest.fn().mockReturnValue({ column: 3, row: 4 });
    gameboard.receiveAttacks = jest.fn();
    player.makeAttack(gameboard);
    expect(gameboard.receiveAttacks).toHaveBeenCalledWith({ column: 3, row: 4 });
  });
});
