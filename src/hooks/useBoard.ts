import { useState } from "react";
import { Board } from "../Components/Board";

export const useBoard = (boardSize: number) => {
  const initializeBoard = () => {
    const squares = Array(boardSize).fill(null);
    for (let i = 0; i < boardSize; i++) {
      squares[i] = Array(boardSize).fill(null);
    }
    return {
      squares: squares,
      xIsNext: true,
      winner: null,
      winningSquaresIndexes: [],
    } as Board;
  };

  const [board, setBoard] = useState<Board>(initializeBoard());

  const handleClick = (i: number, j: number) => {
    const squares = copySquares(board.squares);

    if (board.winner !== null || squares[i][j]) {
      return;
    }
    squares[i][j] = board.xIsNext ? "X" : "O";
    const winningSquaresIndexes = checkWinner(squares);

    setBoard({
      squares: squares,
      xIsNext: !board.xIsNext,
      winner: winningSquaresIndexes.length > 0 ? squares[i][j] : null,
      winningSquaresIndexes: winningSquaresIndexes,
    });
  };

  const reset = () => {
    setBoard(initializeBoard());
  };

  const copySquares = (squares: string[][]) => {
    const squaresCopy = Array(boardSize).fill(null);
    for (let i = 0; i < boardSize; i++) {
      squaresCopy[i] = Array(boardSize).fill(null);
    }
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        squaresCopy[i][j] = squares[i][j];
      }
    }
    return squaresCopy;
  };

  const checkWinner = (squares: string[][]) => {
    let winningSquaresIndexes = [
      ...checkRows(squares),
      ...checkColumns(squares),
      ...checkMainDiagonal(squares),
      ...checkSecondaryDiagonal(squares),
    ];
    return winningSquaresIndexes;
  };

  const checkRows = (squares: string[][]) => {
    for (let i = 0; i < squares.length; i++) {
      const isMatch = squares[i].every(
        (square) => square && square === squares[i][0]
      );
      if (isMatch) {
        const winningSquaresIndexes = [];
        for (let j = 0; j < squares.length; j++) {
          winningSquaresIndexes[j] = { row: i, column: j };
        }
        return winningSquaresIndexes;
      }
    }
    return [];
  };

  const checkColumns = (squares: string[][]) => {
    for (let i = 0; i < squares.length; i++) {
      const isMatch = squares.every(
        (square) => square[i] && square[i] === squares[0][i]
      );
      if (isMatch) {
        const winningSquaresIndexes = [];
        for (let j = 0; j < squares.length; j++) {
          winningSquaresIndexes[j] = { row: j, column: i };
        }
        return winningSquaresIndexes;
      }
    }
    return [];
  };

  const checkMainDiagonal = (squares: string[][]) => {
    let isMainDiagonalMatch = true;

    for (let i = 0; i < squares.length; i++) {
      if (squares[i][i] !== squares[0][0] || !squares[i][i]) {
        isMainDiagonalMatch = false;
        break;
      }
    }

    if (isMainDiagonalMatch) {
      const winningSquaresIndexes = [];
      for (let j = 0; j < squares.length; j++) {
        winningSquaresIndexes[j] = { row: j, column: j };
      }
      return winningSquaresIndexes;
    }

    return [];
  };

  const checkSecondaryDiagonal = (squares: string[][]) => {
    let isSecondaryDiagonalMatch = true;

    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i][squares.length - 1 - i] !== squares[0][squares.length - 1] ||
        !squares[i][squares.length - 1 - i]
      ) {
        isSecondaryDiagonalMatch = false;
        break;
      }
    }

    if (isSecondaryDiagonalMatch) {
      const winningSquaresIndexes = [];
      for (let j = 0; j < squares.length; j++) {
        winningSquaresIndexes[j] = { row: j, column: squares.length - 1 - j };
      }
      return winningSquaresIndexes;
    }
    return [];
  };

  return { board, handleClick, reset };
};