import styled from "styled-components";

export const Header = styled.header`
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-family: 'Lobster', cursive;
    margin: 0px 0px 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 24px;
    }
`;