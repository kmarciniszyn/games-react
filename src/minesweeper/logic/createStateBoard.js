import { createMarkedBoard } from "./createMarkedBoard";
import { createRandomMinedBoard } from "./createRandomMinedBoard";

export default (boardSize, minesNumber) => {
    const minedBoard = createRandomMinedBoard(boardSize, minesNumber);
    const markedBoard = createMarkedBoard(minedBoard, boardSize);

    const stateBoard = [];

    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++) {
            stateBoard.push({
                id: `x${x}y${y}`,
                x: x,
                y: y,
                disabled: false,
                clicked: false,
                text: markedBoard[x][y],
            });
        }
    }

    return stateBoard;
};