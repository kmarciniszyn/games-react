import React from "react";
import { Body, Header, Section, Title } from "./styled";

export default ({ title, extraHeaderContent, bodyContent }) => (
    <Section>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {bodyContent}
        </Body>
    </Section>
);