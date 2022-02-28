export const createRandomMinedBoard = (size, minesAmount) => {
    const minedBoard = []; // "x" means this position is mined

    const xMinesCoordinates = getRandomCoordinates(size, minesAmount);
    const yMinesCoordinates = getRandomCoordinates(size, minesAmount);

    for (let y = 0; y < size; y++) {
        const row = [];

        for (let x = 0; x < size; x++) {
            row.push("-");
        }

        minedBoard.push(row);
    }

    for (let i = 0; i < minesAmount; i++) {
        minedBoard[xMinesCoordinates[i]][yMinesCoordinates[i]] = ("x");
    }

    return minedBoard;
};

const getRandomCoordinates = (coordinatesNumber, minesAmount) => {
    const coordinates = new Set();
    while (coordinates.size < minesAmount) {
        coordinates.add(Math.floor(Math.random() * coordinatesNumber));
    }
    return Array.from(coordinates);
};