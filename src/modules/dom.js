import Gameboard from './gameboard';
import Ship from './ship';

const initializeGame = () => {
  const playerGameboard = new Gameboard(10);
  const computerGameboard = new Gameboard(10);

  // Place player's ships
  const playerShips = [
    new Ship(5), // Carrier
    new Ship(4), // Battleship
    new Ship(3), // Cruiser
    new Ship(3), // Submarine
    new Ship(2), // Destroyer
  ];
  placeShipsRandomly(playerGameboard, playerShips);

  // Place computer's ships
  const computerShips = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
  placeShipsRandomly(computerGameboard, computerShips);

  // Render the gameboards
  renderGameboard('player-board', playerGameboard);
  renderGameboard('computer-board', computerGameboard);
};

const placeShipsRandomly = (gameboard, ships) => {
  for (const ship of ships) {
    let startRow, startCol, orientation;

    do {
      startRow = getRandomCoordinate(gameboard.size);
      startCol = getRandomCoordinate(gameboard.size);
      orientation = getRandomOrientation();
    } while (!gameboard.placeShip(ship, startRow, startCol, orientation));
  }
};

const getRandomCoordinate = (size) => {
  return Math.floor(Math.random() * size);
};

const getRandomOrientation = () => {
  return Math.random() < 0.5 ? 'horizontal' : 'vertical';
};

const renderGameboard = (containerId, gameboard) => {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  for (let row = 0; row < gameboard.size; row++) {
    for (let col = 0; col < gameboard.size; col++) {
      const cell = document.createElement('div');
      cell.classList.add('board-cell');
      cell.dataset.row = row;
      cell.dataset.column = col;

      const ship = gameboard.getShipAt(row, col);
      if (ship !== null) {
        cell.classList.add('ship-cell');
      }

      const orientation = gameboard.getOrientationAt(row, col);
      const isHorizontal = orientation === 'horizontal';
      const isVertical = orientation === 'vertical';

      if (isHorizontal) {
        cell.classList.add('ship-cell-horizontal');
      } else if (isVertical) {
        cell.classList.add('ship-cell-vertical');
      }

      container.appendChild(cell);
    }
  }
};

export default initializeGame;
