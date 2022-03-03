import React from "react";
import { Button, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectBoardSize, selectStateBoard } from "../../minesweeperSlice";
import useRevealCell from "./useRevealCell";

export default () => {
    const boardSize = useSelector(selectBoardSize);
    const stateBoard = useSelector(selectStateBoard);
    const revealCell = useRevealCell();

    return (
        <section>
            <Wrapper size={boardSize}>
                {
                    stateBoard.map(item => (
                        <Button
                            key={item.id}
                            onClick={() => revealCell(item.id, item.x, item.y)}
                            disabled={item.disabled}
                            releved={item.clicked}
                            mined={(item.clicked && item.text === "x") ? true : false}
                            number={item.text}
                        >
                            {(item.clicked && item.text !== "x") ? item.text : ""}
                        </Button>
                    ))
                }
            </Wrapper>
        </section>
    )
};