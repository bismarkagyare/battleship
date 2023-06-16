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
    //cell.draggable = true;

    //cell.addEventListener('dragstart', handleDragStart);
    //cell.addEventListener('dragend', handleDragEnd);
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

const handleDragStart = (event) => {
  const shipCell = event.target;
  const shipElement = shipCell.closest('.ship-cell');
  const shipCells = Array.from(shipElement.parentNode.children);

  event.dataTransfer.setData('text/plain', shipElement.dataset.row + '-' + shipElement.dataset.column);

  // Highlight all ship cells during dragging
  shipCells.forEach((cell) => {
    cell.classList.add('dragging');
  });
};

const handleDragEnd = (event) => {
  const shipCell = event.target;
  const shipElement = shipCell.closest('.ship-cell');
  const shipCells = Array.from(shipElement.parentNode.children);

  // Remove highlighting from ship cells after dragging
  shipCells.forEach((cell) => {
    cell.classList.remove('dragging');
  });
};

export default initializeGame;
