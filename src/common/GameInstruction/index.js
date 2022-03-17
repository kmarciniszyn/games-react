import React from "react";
import { useParams } from "react-router-dom";
import { minesweeperName } from "../../gamesNames";
import { minesweeperInstruction } from "../../howToPlay";
import { Main, Paragraph } from "./styled";
import Header from "../Header";
import Section from "../Section";

export default () => {
    const { gameName } = useParams();
    let gameInstruction = "";

    switch (gameName) {
        case minesweeperName:
            gameInstruction = minesweeperInstruction;
            break;
        default:
            gameInstruction = "Coś poszło nie tak... Spróbuj ponownie później";
            break;
    }

    return (
        <Main>
            <Header title="Instrukcja gry" />
            <Section
                title={`Jak grać w ${gameName}?`}
                bodyContent={
                    <Paragraph>
                        {gameInstruction}
                    </Paragraph>
                }
            />
        </Main>
    )
};