import Gameboard from './gameboard';
import Ship from './ship';
import placeShipsRandomly from './shipsPlacement';

const initializeGame = () => {
  const playerGameboard = new Gameboard(10);
  const computerGameboard = new Gameboard(10);

  // Place player's ships
  const playerShips = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
  placeShipsRandomly(playerGameboard, playerShips);

  // Place computer's ships
  const computerShips = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
  placeShipsRandomly(computerGameboard, computerShips);

  // Render the gameboards
  renderGameboard('player-board', playerGameboard);
  renderGameboard('computer-board', computerGameboard);

  randomizeShips(playerGameboard, playerShips, computerGameboard, computerShips);
};

const createCell = (row, col, gameboard) => {
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

  return cell;
};

const renderGameboard = (containerId, gameboard) => {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  for (let row = 0; row < gameboard.size; row++) {
    for (let col = 0; col < gameboard.size; col++) {
      const cell = createCell(row, col, gameboard);
      container.appendChild(cell);
    }
  }
};

const randomizeShips = (playerGameboard, playerShips, computerGameboard, computerShips) => {
  const randomizeShipsBtn = document.querySelector('.random-btn');
  randomizeShipsBtn.addEventListener('click', () => {
    playerGameboard.clearGrid();
    computerGameboard.clearGrid();

    placeShipsRandomly(playerGameboard, playerShips);
    placeShipsRandomly(computerGameboard, computerShips);

    renderGameboard('player-board', playerGameboard);
    renderGameboard('computer-board', computerGameboard);
  });
};

export default initializeGame;
