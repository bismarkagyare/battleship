import Gameboard from './gameboard';

const renderGameboard = (container, gameboard) => {
  container.innerHTML = '';

  for (let row = 0; row < gameboard.size; row++) {
    for (let col = 0; col < gameboard.size; col++) {
      const cell = document.createElement('div');
      cell.classList.add('board-cell');
      cell.dataset.column = col;
      cell.dataset.row = row;
      container.appendChild(cell);
    }
  }
};

export default renderGameboard;
