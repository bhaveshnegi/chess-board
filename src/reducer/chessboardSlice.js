import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: Array(8).fill().map(() => Array(8).fill(null)),
  clickedSquares: {}
};

const chessboardSlice = createSlice({
  name: 'chessboard',
  initialState,
  reducers: {
    toggleSquareColor: (state, action) => {
      const { row, col, isWhite } = action.payload;
      const key = `${row}-${col}`;
      state.clickedSquares[key] = isWhite ? 'yellow' : 'red';
    }
  }
});

export const { toggleSquareColor } = chessboardSlice.actions;
export default chessboardSlice.reducer;
