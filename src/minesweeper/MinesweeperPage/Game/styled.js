import styled, { css } from "styled-components";

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
    overflow: scroll;
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

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 10px;
        height: 20px;
    }

    &:disabled {
        cursor: default;
    }
        
    &:hover:enabled {
        filter: brightness(110%);
    }    
`;