import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectBoardSize,
    selectIsGame,
    selectMinesNumber,
    updateBoardSize,
    updateMinesNumber,
    setStateBoard,
    startGame,
    endGame
} from "../../minesweeperSlice";
import createStateBoard from '../../logic/createStateBoard';
import StyledButton from "../../../common/StyledButton/styled";
import SectionOptionsGame from "../../../common/SectionOptionsGame";
import StyledSelect from "../../../common/StyledSelect/styled";
import { minesweeperName } from "../../../gamesNames";

export default () => {
    const dispatch = useDispatch();
    const isGame = useSelector(selectIsGame);
    const minesNumber = useSelector(selectMinesNumber);
    const boardSize = useSelector(selectBoardSize);

    const start = () => {
        const stateBoard = createStateBoard(boardSize, minesNumber);
        dispatch(setStateBoard(stateBoard));
        dispatch(startGame());
    };

    const end = () => {
        dispatch(endGame());
    };

    return (
        <SectionOptionsGame
            gameName={minesweeperName}
            bodyContent={
                <>
                    <label>
                        wielkość planszy
                        <StyledSelect
                            name="boardSize"
                            onChange={({ target }) => dispatch(updateBoardSize(target.value))}
                            disabled={isGame}
                        >
                            <option value="10">mała 10x10</option>
                            <option value="15">średnia 15x15</option>
                            <option value="20">duża 20x20</option>
                        </StyledSelect>
                    </label>
                    <label>
                        ilość min
                        <StyledSelect
                            name="minesNumber"
                            onChange={({ target }) => dispatch(updateMinesNumber(target.value))}
                            disabled={isGame}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="40">40</option>
                            <option value="70">70</option>
                        </StyledSelect>
                    </label>
                    <StyledButton
                        disabled={isGame}
                        onClick={() => start()}
                    >
                        ROZPOCZNIJ GRĘ
                    </StyledButton>
                    <StyledButton
                        disabled={!isGame}
                        onClick={() => end()}
                    >
                        ZAKOŃCZ GRĘ
                    </StyledButton>
                </>
            }
        />
    )
};
