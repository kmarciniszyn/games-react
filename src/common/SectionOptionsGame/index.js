import React from "react";
import { Body, Header, Section, Title } from "./styled";

export default ({ bodyContent }) => (
    <Section>
        <Header>
            <Title>Opcje gry</Title>
        </Header>
        <Body>
            {bodyContent}
        </Body>
    </Section>
);