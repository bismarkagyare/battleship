const placeShipRandomly = (gameboard) => {
  const shipLength = [5, , 4, 3, 2, 1];
  const orientations = ['horizontal', 'vertical'];

  shipLength.forEach((length) => {
    const orientation = orientations[Math.floor(Math.random() * orientations.length)];
    let coordinates = getRandomCoordinates(gameboard.size, length, orientation);

    while (!gameboard.isValidPosition(length, coordinates, orientation)) {
      coordinates = getRandomCoordinates(gameboard.size, length, orientation);
    }

    gameboard.placeShip(length, coordinates, orientation);
  });
};

export default placeShipRandomly;
