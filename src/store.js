import { configureStore } from '@reduxjs/toolkit';
import minesweeperReducer from './minesweeper/minesweeperSlice';

export default configureStore({
    reducer: {
        minesweeper: minesweeperReducer,
    },
});