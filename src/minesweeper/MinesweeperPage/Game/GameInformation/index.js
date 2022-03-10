import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    incrementSeconds,
    selectFlaggedCellsNumber,
    selectGameStatus,
    selectIsGame,
    selectSeconds
} from "../../../minesweeperSlice";
import { Image, Wrapper, Paragraph } from "./styled";
import GameStatusImage from "./GameStatusImage";
import flag from "../images/flag.png";
import watch from "./images/watch.png";

export default () => {
    const gameStatus = useSelector(selectGameStatus);
    const flaggedCellsNumber = useSelector(selectFlaggedCellsNumber);
    const isGame = useSelector(selectIsGame);
    const seconds = useSelector(selectSeconds);

    const dispatch = useDispatch();

    useEffect(() => {
        let intervalId;

        if (isGame) {
            intervalId = setInterval(() => {
                dispatch(incrementSeconds());
            }, 1000);
        }
        else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        }
    }, [isGame]);

    return (
        <Wrapper>
            <Image src={watch} alt="watch" />
            <Paragraph> {seconds} </Paragraph>
            <GameStatusImage gameStatus={gameStatus} />
            <Image src={flag} alt="flag" />
            <Paragraph> {flaggedCellsNumber}</Paragraph>
        </Wrapper>
    )
};