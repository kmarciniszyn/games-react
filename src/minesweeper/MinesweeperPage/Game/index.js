import React from "react";
import { Button, Section, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import {
    selectBoardSize,
    selectStateBoard,
    selectGameStatus
} from "../../minesweeperSlice";
import useRevealCell from "./useRevealCell";
import useToggleFlagCell from "./useToggleFlagCell";
import GameInformation from "./GameInformation";
import BoardItemContent from "./BoardItemContent";

export default () => {
    const boardSize = useSelector(selectBoardSize);
    const stateBoard = useSelector(selectStateBoard);
    const gameStatus = useSelector(selectGameStatus);

    const revealCell = useRevealCell();
    const toggleFlagCell = useToggleFlagCell();

    const toggleFlag = (event, id) => {
        event.preventDefault();
        toggleFlagCell(id);
    };

    return (
        <Section>
            <GameInformation />
            <Wrapper size={boardSize}>
                {
                    stateBoard.map(item => (
                        <Button
                            key={item.id}
                            onClick={() => revealCell(item.id, item.x, item.y)}
                            onContextMenu={(event) => toggleFlag(event, item.id)}
                            disabled={item.disabled}
                            releved={item.clicked}
                            number={item.text}
                        >
                            <BoardItemContent
                                stateBoardItem={item}
                                gameStatus={gameStatus}
                            />
                        </Button>
                    ))
                }
            </Wrapper>
        </Section >
    )
};