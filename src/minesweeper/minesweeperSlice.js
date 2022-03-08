import { createSlice } from '@reduxjs/toolkit';

const minesweeperSlice = createSlice({
    name: 'minesweeper',
    initialState: {
        isGame: false,
        minesNumber: 10,
        boardSize: 10,
        stateBoard: [],
        flaggedCellsNumber: 0,
        score: 0,
        gameStatus: "initial",
    },
    reducers: {
        updateMinesNumber: (state, { payload: minesNumber }) => {
            state.minesNumber = minesNumber;
        },
        updateBoardSize: (state, { payload: boardSize }) => {
            state.boardSize = boardSize;
        },
        setStateBoard: (state, { payload: stateBoard }) => {
            state.stateBoard = stateBoard;
        },
        updateStateBoard: ({ stateBoard }, { payload: itemId }) => {
            const index = stateBoard.findIndex(item => item.id === itemId);
            stateBoard[index].clicked = true;
            stateBoard[index].disabled = true;
        },
        startGame: state => {
            state.isGame = true;
            state.flaggedCellsNumber = 0;
            state.score = 0;
            state.gameStatus = "game";
        },
        endGame: state => {
            state.isGame = false;

            // reveal all the cells
            state.stateBoard.map(item => {
                item.clicked = true;
                item.disabled = true;
                item.flagged = false;
            });
        },
        incrementScore: state => {
            state.score++;
        },
        decrementScore: state => {
            state.score--;
        },
        flagCell: (state, { payload: itemId }) => {
            state.flaggedCellsNumber++;
            const index = state.stateBoard.findIndex(item => item.id === itemId);
            state.stateBoard[index].flagged = true;
            state.stateBoard[index].disabled = true;
        },
        unflagCell: (state, { payload: itemId }) => {
            state.flaggedCellsNumber--;
            const index = state.stateBoard.findIndex(item => item.id === itemId);
            state.stateBoard[index].flagged = false;
            state.stateBoard[index].disabled = false;
        },
        updateGameStatus: (state, { payload: newStatus }) => {
            state.gameStatus = newStatus;
        },
    },
});

export const selectMinesweeperState = state => state.minesweeper;

export const selectMinesNumber = state => selectMinesweeperState(state).minesNumber;
export const selectBoardSize = state => selectMinesweeperState(state).boardSize;
export const selectIsGame = state => selectMinesweeperState(state).isGame;
export const selectStateBoard = state => selectMinesweeperState(state).stateBoard;
export const selectFlaggedCellsNumber = state => selectMinesweeperState(state).flaggedCellsNumber;
export const selectScore = state => selectMinesweeperState(state).score;
export const selectGameStatus = state => selectMinesweeperState(state).gameStatus;

export const {
    updateMinesNumber,
    updateBoardSize,
    setStateBoard,
    startGame,
    endGame,
    updateStateBoard,
    incrementScore,
    decrementScore,
    unflagCell,
    flagCell,
    updateGameStatus
} = minesweeperSlice.actions;

export default minesweeperSlice.reducer;