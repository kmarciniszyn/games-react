import { useDispatch, useSelector } from "react-redux";
import {
    selectScore,
    selectStateBoard,
    unflagCell,
    flagCell,
    decrementScore,
    incrementScore,
    selectMinesNumber,
    updateGameStatus,
    endGame
} from "../../minesweeperSlice";

const useToggleFlagCell = () => {
    const dispatch = useDispatch();

    const stateBoard = useSelector(selectStateBoard);
    const score = useSelector(selectScore);
    const minesNumber = useSelector(selectMinesNumber);

    return (id) => {
        const index = stateBoard.findIndex(item => item.id === id);

        if (stateBoard[index].disabled && !stateBoard[index].flagged) return;

        if (stateBoard[index].flagged) {
            dispatch(unflagCell(id));

            if (stateBoard[index].text === "x") {
                dispatch(decrementScore());
            }

        } else {
            dispatch(flagCell(id));

            if (stateBoard[index].text === "x") {
                dispatch(incrementScore());

                if (score + 1 === minesNumber) {
                    dispatch(endGame());
                    dispatch(updateGameStatus("win"));
                }
            }
        }
    };
};

export default useToggleFlagCell;