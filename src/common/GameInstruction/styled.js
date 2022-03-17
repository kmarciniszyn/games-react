import styled from "styled-components";

export const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const Paragraph = styled.p`
    text-align: justify;
    line-height: 2em;
    font-size: 16px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 14px;
    }
`;