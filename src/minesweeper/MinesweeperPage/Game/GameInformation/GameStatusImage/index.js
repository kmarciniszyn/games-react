import React from "react";
import { Image } from "./styled";
import happySunImage from "./images/happySun.png";
import sadSunImage from "./images/sadSun.png";
import winSunImage from "./images/winSun.png";

export default ({ gameStatus }) => {

    switch (gameStatus) {
        case "initial":
            return <Image src={happySunImage} alt="happy sun" />;
        case "game":
            return <Image src={happySunImage} alt="happy sun" />;
        case "win":
            return <Image src={winSunImage} alt="win sun" />;
        case "lose":
            return <Image src={sadSunImage} alt="sad sun" />;
        default:
            throw new Error(`incorrect status ${gameStatus}`);
    }
};