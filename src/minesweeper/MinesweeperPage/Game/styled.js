import styled, { css } from "styled-components";
import mine from "./mine.png";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ size }) => size}, 1fr);
    padding: 20px;
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

    ${({ mined }) => mined && css`
        background-color: ${({ theme }) => theme.colors.primary};
        background-image: url(${mine});
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