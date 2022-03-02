import { createSlice } from '@reduxjs/toolkit';

const minesweeperSlice = createSlice({
    name: 'minesweeper',
    initialState: {
        isGame: false,
        minesNumber: 10,
        boardSize: 10,
        stateBoard: [],
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
        },
        endGame: state => {
            state.isGame = false;

            // reveal all the cells
            state.stateBoard.map(item => {
                item.clicked = true;
                item.disabled = true;
            });
        },

    },
});

export const selectMinesweeperState = state => state.minesweeper;

export const selectMinesNumber = state => selectMinesweeperState(state).minesNumber;
export const selectBoardSize = state => selectMinesweeperState(state).boardSize;
export const selectIsGame = state => selectMinesweeperState(state).isGame;
export const selectStateBoard = state => selectMinesweeperState(state).stateBoard;

export const {
    updateMinesNumber,
    updateBoardSize,
    setStateBoard,
    startGame,
    endGame,
    updateStateBoard
} = minesweeperSlice.actions;

export default minesweeperSlice.reducer;