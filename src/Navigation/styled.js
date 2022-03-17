import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        font-weight: bold;
    }

    text-transform : uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.navigation.text};
    transition: 0.3s;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.navigation.background};
`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 10px;
    margin: 0;
`;

export const StyledLi = styled.li`
    margin: 10px;
`;