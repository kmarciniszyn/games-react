import React from "react";
import Section from "../Section";
import { Body } from "./styled";

export default ({ bodyContent }) => (
    <Section
        title="Opcje gry"
        bodyContent={
            <Body>
                {bodyContent}
            </Body>
        }
    />
);