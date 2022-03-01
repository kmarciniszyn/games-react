const howManyMines = (coordinates, minedBoard) => {
    // mineCounter - number of mines in the neighbourhood
    let mineCounter = 0;

    const stepsNumber = coordinates.length;

    for (let step = 0; step < stepsNumber; step++) {
        if (minedBoard[coordinates[step][0]][coordinates[step][1]] === "x") {
            mineCounter++;
        }
    }

    return mineCounter;
};

export const createMarkedBoard = (minedBoard, boardSize) => {
    const markedBoard = [];
    let row = [];

    // MARK FIRST ROW

    // topLeftCoordinates - coordinates of cells around the cell in the top left corner
    const topLeftCoordinates = [[0, 1], [1, 1], [1, 0]]; 
    row.push(howManyMines(topLeftCoordinates, minedBoard));

    for (let y = 1; y < boardSize - 1; y++) {
        const edgeCoordinates = [[0, y - 1], [0, y + 1], [1, y - 1], [1, y], [1, y + 1]];
        row.push(howManyMines(edgeCoordinates, minedBoard));
    }

    // topRightCoordinates - coordinates of cells around the cell in the top right corner
    const topRightCoordinates = [[0, boardSize - 2], [1, boardSize - 2], [1, boardSize - 1]];
    row.push(howManyMines(topRightCoordinates, minedBoard));

    markedBoard.push(row);

    // MARK MIDDLE ROWS

    // outerCoordinates - coordinates of cells around the outer cell
    let outerCoordinates = [];

    for (let x = 1; x < boardSize - 1; x++) {
        row = [];
        let coordinates = [];

        outerCoordinates = [[x - 1, 0], [x - 1, 1], [x, 1], [x + 1, 1], [x + 1, 0]];
        row.push(howManyMines(outerCoordinates, minedBoard));

        for (let y = 1; y < boardSize - 1; y++) {
            coordinates = [[x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
            [x, y + 1], [x + 1, y + 1], [x + 1, y], [x + 1, y - 1], [x, y - 1]];
            row.push(howManyMines(coordinates, minedBoard));
        }

        outerCoordinates = [[x + 1, boardSize - 1], [x + 1, boardSize - 2],
        [x, boardSize - 2], [x - 1, boardSize - 2], [x - 1, boardSize - 1]];
        row.push(howManyMines(outerCoordinates, minedBoard));

        markedBoard.push(row);
    }

    // MARK LAST ROW
    
    row = [];

    // bottomLeftCoordinates - coordinates of the cells around the cell in the bottom left corner
    const bottomLeftCoordinates = [[boardSize - 2, 0], [boardSize - 2, 1], [boardSize - 1, 1]];
    row.push(howManyMines(bottomLeftCoordinates, minedBoard));

    for (let y = 1; y < boardSize - 1; y++) {
        const edgeCoordinates = [[boardSize - 1, y - 1], [boardSize - 2, y - 1],
        [boardSize - 2, y], [boardSize - 2, y + 1], [boardSize - 1, y + 1]];
        row.push(howManyMines(edgeCoordinates, minedBoard));
    }

    // bottomRightCoordinates - coordinates of the cells around the cell in the bottom right corner
    const bottomRightCoordinates = [[boardSize - 2, boardSize - 1],
    [boardSize - 2, boardSize - 2], [boardSize - 1, boardSize - 2]];
    row.push(howManyMines(bottomRightCoordinates, minedBoard));

    markedBoard.push(row);

    return markedBoard;
};