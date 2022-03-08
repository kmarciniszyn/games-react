import styled, { css, keyframes } from "styled-components";
import flagImage from "./images/flag.png";
import flowersGif from "./images/flowers.gif";

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

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.game.background};
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ size }) => size}, 1fr);
    padding: 10px;
`;

export const MineImage = styled.img`
    height: 50px;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-name: ${rotate};
`;

export const Button = styled.button`
    cursor: pointer;
    height: 50px;
    font-weight: 800;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.game.button.text};
    background-color: ${({ theme }) => theme.colors.game.button.background};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: none;    

    ${({ releved }) => releved && css`
        box-shadow: none;
    `}

    ${({ flagged }) => flagged && css`
        background-image: url(${flagImage});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    `}

    ${({ flowers }) => flowers && css`
        background-image: url(${flowersGif});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    `}

    ${({ number }) => number === 1 && css`
        color: ${({ theme }) => theme.colors.game.oneNeighbour};`
    }

    ${({ number }) => number === 2 && css`
        color: ${({ theme }) => theme.colors.game.twoNeighbours};`
    }
    
    ${({ number }) => number === 3 && css`
        color: ${({ theme }) => theme.colors.game.threeNeighbours};`
    }

    ${({ number }) => number === 4 && css`
        color: ${({ theme }) => theme.colors.game.fourNeighbours};`
    }

    ${({ number }) => number === 5 && css`
        color: ${({ theme }) => theme.colors.game.fiveNeighbours};`
    }

    ${({ number }) => number === 6 && css`
        color: ${({ theme }) => theme.colors.game.sixNeighbours};`
    }
    
    ${({ number }) => number === 7 && css`
        color: ${({ theme }) => theme.colors.game.sevenNeighbours};`
    }

    ${({ number }) => number === 8 && css`
        color: ${({ theme }) => theme.colors.game.eightNeighbours};`
    }

    &:disabled {
        cursor: default;
    }
        
    &:hover:enabled {
        filter: brightness(110%);
    }    
`;