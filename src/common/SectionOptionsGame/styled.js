import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        justify-content: flex-start;
        font-size: 14px;
    }
`;
