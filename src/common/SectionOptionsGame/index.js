import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import { Body } from "./styled";
import { toInstruction } from "../../routes";
import QuestionMarkIcon from "./QuestionMarkIcon";

export default ({ bodyContent, gameName }) => (
    <Section
        title="Opcje gry"
        extraHeaderContent={
            <Link
                to={toInstruction({ gameName: gameName })}
                title="Jak grać">
                <QuestionMarkIcon />
            </Link>
        }
        bodyContent={
            <Body>
                {bodyContent}
            </Body>
        }
    />
);
