import { configureStore } from '@reduxjs/toolkit';
import chessboardReducer from '../reducer/chessboardSlice';

export const store = configureStore({
  reducer: {
    chessboard: chessboardReducer,
  }
});
