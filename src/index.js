import './styles/style.scss';
import Ship from './modules/ship';

const ship = new Ship(3);
console.log(ship.length);
console.log(ship.hits);
console.log(ship.isSunk());
console.log(ship.hit(0));
console.log(ship.hit(1));
console.log(ship.hit(2));
console.log(ship.hits);
console.log(ship.isSunk());
