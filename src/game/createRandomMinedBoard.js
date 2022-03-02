export const createRandomMinedBoard = (size, minesAmount) => {
    const minedBoard = []; // "x" means this position is mined

    const minesCoordinates = getRandomCoordinates(size, minesAmount);

    for (let y = 0; y < size; y++) {
        const row = [];

        for (let x = 0; x < size; x++) {
            row.push("-");
        }

        minedBoard.push(row);
    }

    for (let i = 0; i < minesAmount; i++) {
        minedBoard[minesCoordinates[i].x][minesCoordinates[i].y] = ("x");
    }

    return minedBoard;
};

const getRandomCoordinates = (coordinatesNumber, minesAmount) => {
    const coordinates = [];

    while (coordinates.length < minesAmount) {
        const x = Math.floor(Math.random() * coordinatesNumber);
        const y = Math.floor(Math.random() * coordinatesNumber);

        const randomCoordinates = {
            id: `x${x}y${y}`,
            x: x,
            y: y,
        };

        if(coordinates.findIndex(item => item.id === randomCoordinates.id) === -1){
            coordinates.push(randomCoordinates);
        }
    }

    return coordinates;
};