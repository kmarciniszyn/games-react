import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    align-items: center;
    justify-items: center;
    padding: 10px;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Paragraph = styled.p`
    font-size: 28px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 18px;
    }
`;