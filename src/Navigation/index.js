import React from "react";
import { StyledNav, StyledLi, StyledUl, StyledNavLink } from "./styled";
import { toMinesweeper } from "../routes";
import { minesweeperName } from "../gamesNames";

export default () => (
    <StyledNav>
        <StyledUl>
            <StyledLi>
                <StyledNavLink to={toMinesweeper()}>{minesweeperName}</StyledNavLink>
            </StyledLi>
        </StyledUl>
    </StyledNav>
);