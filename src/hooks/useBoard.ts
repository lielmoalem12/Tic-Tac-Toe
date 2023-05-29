import { useState } from "react";
import { Board } from "../Components/Board";

export const useBoard = (startingBoardSize: number) => {
  const [boardSize, setBoardSize] = useState<number>(startingBoardSize);
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const initializeBoard = (boardSize: number) => {
    const squares = Array(boardSize).fill(null);
    for (let i = 0; i < boardSize; i++) {
      squares[i] = Array(boardSize).fill(null);
    }
    return {
      squares: squares,
      xIsNext: Math.random() < 0.5,
      // xIsNext: true,
      winner: null,
      winningSquaresIndexes: [],
    } as Board;
  };

  const changeBoardSize = (newBoardSize: number) => {
    setBoardSize(newBoardSize);
    setBoard(initializeBoard(newBoardSize));
  };

  const [board, setBoard] = useState<Board>(initializeBoard(boardSize));

  const handleClick = (i: number, j: number) => {
    const squares = copySquares(board.squares);

    if (board.winner !== null || squares[i][j]) {
      return;
    }
    squares[i][j] = board.xIsNext ? "X" : "O";
    const winningSquaresIndexes = checkWinner(squares);
    let isDraw: boolean;

    if (winningSquaresIndexes.length === 0) {
      isDraw = squares.every((row) =>
        row.every((square: string) => square !== null)
      );
      isDraw && setIsGameOver(true);
    } else {
      isDraw = false;
      setIsGameOver(true);
      if (squares[i][j] === "X") {
        setPlayer1Score((prev) => prev + 1);
      } else {
        setPlayer2Score((prev) => prev + 1);
      }
    }

    setBoard((prev) => ({
      ...prev,
      squares: squares,
      xIsNext: !prev.xIsNext,
      winner:
        winningSquaresIndexes.length > 0
          ? squares[i][j]
          : isDraw
          ? "tie"
          : null,
    }));

    setTimeout(() => {
      setBoard((prev) => ({
        ...prev,
        winningSquaresIndexes: winningSquaresIndexes,
      }));
    }, 100);
  };

  const reset = () => {
    setBoard(initializeBoard(boardSize));
    setIsGameOver(false);
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

  return {
    board,
    player1Score,
    player2Score,
    isGameOver,
    handleClick,
    reset,
    changeBoardSize,
  };
};
