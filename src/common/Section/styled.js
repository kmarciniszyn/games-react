import styled from "styled-components";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.section.background};
    border-radius: 10px;
    padding: 10px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    padding: 10px;
`;
