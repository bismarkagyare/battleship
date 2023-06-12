const placeShipsRandomly = (gameboard, ships) => {
  ships.forEach((ship) => {
    let startRow, startCol, orientation;

    do {
      startRow = getRandomCoordinate(gameboard.size);
      startCol = getRandomCoordinate(gameboard.size);
      orientation = getRandomOrientation();
    } while (!gameboard.placeShip(ship, startRow, startCol, orientation));
  });
};

const getRandomCoordinate = (size) => {
  return Math.floor(Math.random() * size);
};

const getRandomOrientation = () => {
  return Math.random() < 0.5 ? 'horizontal' : 'vertical';
};

export default placeShipsRandomly;
