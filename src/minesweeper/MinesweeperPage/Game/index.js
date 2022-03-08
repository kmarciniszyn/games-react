import React from "react";
import { Button, MineImage, Section, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import {
    selectBoardSize,
    selectStateBoard,
    selectGameStatus
} from "../../minesweeperSlice";
import useRevealCell from "./useRevealCell";
import mineImage from "./images/mine.png";
import useToggleFlagCell from "./useToggleFlagCell";
import GameInformation from "./GameInformation";

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
                            flagged={item.flagged}
                            flowers={(gameStatus === "win" && item.text === "x") ? true : false}
                            number={item.text}
                        >
                            {(item.clicked && item.text !== "x") ? item.text : ""}
                            {(gameStatus === "lose" && item.text === "x")
                                ? <MineImage src={mineImage} alt="mine" />
                                : ""
                            }
                        </Button>
                    ))
                }
            </Wrapper>
        </Section >
    )
};