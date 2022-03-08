import React from "react";
import { useSelector } from "react-redux";
import { selectFlaggedCellsNumber, selectGameStatus } from "../../../minesweeperSlice";
import { Image, Wrapper, Paragraph } from "./styled";
import GameStatusImage from "./GameStatusImage";
import flag from "../images/flag.png";

export default () => {
    const gameStatus = useSelector(selectGameStatus);
    const flaggedCellsNumber = useSelector(selectFlaggedCellsNumber);

    return (
        <Wrapper>
            <GameStatusImage gameStatus={gameStatus} />
            <Image src={flag} alt="flag" />
            <Paragraph> {flaggedCellsNumber}</Paragraph>
        </Wrapper>
    )
};