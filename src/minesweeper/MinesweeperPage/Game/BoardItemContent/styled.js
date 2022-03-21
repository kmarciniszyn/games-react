import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: scale(0.5);
    }
    20%{
        transform: scale(0.9);
    }
    40%{
        transform: scale(0.5);
    }
    60%{
        transform: scale(0.9);
    }
    80% {
        transform: scale(0.8);
    }
    100%{
        transform: scale(1);
    }
`;

export const StyledImage = styled.img`
    height: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        height: 20px;
    }
`;

export const MineImage = styled(StyledImage)`
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-name: ${rotate};
`;
