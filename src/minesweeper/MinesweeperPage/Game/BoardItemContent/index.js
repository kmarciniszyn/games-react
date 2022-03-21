import React from "react";
import { StyledFlagIcon } from "../FlagIcon/styled";
import { MineImage, StyledImage } from "./styled";
import mineImage from "./images/mine.png";
import flowersGif from "./images/flowers.gif";


export default ({ stateBoardItem, gameStatus }) => {

    if (stateBoardItem.clicked && stateBoardItem.text !== "x") {
        return stateBoardItem.text;
    }

    if (stateBoardItem.flagged) {
        return <StyledFlagIcon resizable />;
    }

    if (gameStatus === "lose" && stateBoardItem.text === "x") {
        return <MineImage src={mineImage} alt="mine" />;
    }

    if (gameStatus === "win" && stateBoardItem.text === "x") {
        return <StyledImage src={flowersGif} alt="flowers" />;
    }

    return null;
};