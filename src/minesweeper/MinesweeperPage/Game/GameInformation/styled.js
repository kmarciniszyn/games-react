import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        justify-content: center;
    }
`;

export const Image = styled.img`
    height: 60px;
`;

export const Paragraph = styled.p`
    font-size: 28px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 18px;
    }
`;