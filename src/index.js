import './styles/style.scss';
import Ship from './modules/ship';
import Gameboard from './modules/gameboard';
import renderGameboard from './modules/dom';

const playerBoardContainer = document.querySelector('.player-board');
const computerBoardContainer = document.querySelector('.computer-board');

const playerGameboard = new Gameboard(10);
const computerGameboard = new Gameboard(10);

renderGameboard(playerBoardContainer, playerGameboard);
renderGameboard(computerBoardContainer, computerGameboard);
