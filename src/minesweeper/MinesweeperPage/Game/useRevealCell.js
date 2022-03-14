import { useDispatch, useSelector } from "react-redux";
import {
    selectBoardSize,
    selectStateBoard,
    updateStateBoard,
    endGame,
    updateGameStatus
} from "../../minesweeperSlice";

const useRevealCell = () => {
    const dispatch = useDispatch();
    const boardSize = useSelector(selectBoardSize);
    const stateBoard = useSelector(selectStateBoard);

    const markNearlyZero = (x, y, revealedCells) => {

        revealedCells = markIfNotMined(x + 1, y + 1, revealedCells);
        revealedCells = markIfNotMined(x + 1, y, revealedCells);
        revealedCells = markIfNotMined(x + 1, y - 1, revealedCells);
        revealedCells = markIfNotMined(x, y - 1, revealedCells);
        revealedCells = markIfNotMined(x, y + 1, revealedCells);
        revealedCells = markIfNotMined(x - 1, y + 1, revealedCells);
        revealedCells = markIfNotMined(x - 1, y, revealedCells);
        revealedCells = markIfNotMined(x - 1, y - 1, revealedCells);

        return revealedCells;
    };

    const markIfNotMined = (x, y, revealedCells) => {
        if (x < 0 || y < 0 || x >= boardSize || y >= boardSize) return revealedCells;

        const id = `x${x}y${y}`;
        const index = stateBoard.findIndex(item => item.id === id);

        if (revealedCells.includes(id)
            || stateBoard[index].clicked === true
            || stateBoard[index].text === "x")
            return revealedCells;

        revealedCells.push(id);

        if (!stateBoard[index].flagged) {
            dispatch(updateStateBoard(id));
        }

        if (stateBoard[index].text === 0) {
            revealedCells = markNearlyZero(x, y, revealedCells);
        }

        return revealedCells;
    };

    return (id, x, y) => {
        const index = stateBoard.findIndex(item => item.id === id);

        if (stateBoard[index].text === 0) {
            const revealedCells = [];
            dispatch(updateStateBoard(id));
            markNearlyZero(x, y, revealedCells);

        } else if (stateBoard[index].text === "x") {
            dispatch(endGame());
            dispatch(updateGameStatus("lose"));

        } else {
            dispatch(updateStateBoard(id));
        }
    };
};

export default useRevealCell;
