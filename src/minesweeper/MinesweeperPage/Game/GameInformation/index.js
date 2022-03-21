import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    incrementSeconds,
    selectFlaggedCellsNumber,
    selectGameStatus,
    selectIsGame,
    selectSeconds
} from "../../../minesweeperSlice";
import { Wrapper, Paragraph, ItemWrapper } from "./styled";
import GameStatusImage from "./GameStatusImage";
import { StyledWatchIcon } from "./WatchIcon/styled";
import { StyledFlagIcon } from "../FlagIcon/styled";

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
            <ItemWrapper>
                <StyledWatchIcon />
                <Paragraph>{seconds}</Paragraph>
            </ItemWrapper>
            <GameStatusImage gameStatus={gameStatus} />
            <ItemWrapper>
                <StyledFlagIcon />
                <Paragraph>{flaggedCellsNumber}</Paragraph>
            </ItemWrapper>
        </Wrapper>
    )
};