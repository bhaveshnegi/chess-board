import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSquareColor } from '../reducer/chessboardSlice';
import './ChessBoard.css';

const ChessBoard = () => {
  const dispatch = useDispatch();
  const clickedSquares = useSelector((state) => state.chessboard.clickedSquares);

  const renderSquare = (row, col) => {
    const isWhite = (row + col) % 2 === 0;
    const defaultColor = isWhite ? 'white' : 'black';
    const color = clickedSquares[`${row}-${col}`] || defaultColor;

    return (
      <div
        key={`${row}-${col}`}
        className="square"
        style={{ backgroundColor: color }}
        onClick={() => dispatch(toggleSquareColor({ row, col, isWhite }))}
      />
    );
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        board.push(renderSquare(row, col));
      }
    }
    return board;
  };

  return <div className="board">{renderBoard()}</div>;
};

export default ChessBoard;
