import styled, { css } from "styled-components";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.section.background};
    border-radius: 10px;
    padding: 10px;
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.colors.section.borderBottom};
    padding: 10px;
`;

export const Title = styled.h2`
    font-size: 28px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 18px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        justify-content: flex-start;
        font-size: 14px;
    }
`;
