import { useEffect } from "react";
import { useBoard } from "../../hooks/useBoard";
import { Square } from "../Square";
import { BoardContainer } from "./style";
import { Button } from "../Button";

export interface Board {
  squares: string[][];
  xIsNext: boolean;
  winner: string | null;
  winningSquaresIndexes: { row: number; column: number }[];
}

interface BoardProps {
  boardSize: number;
  board: Board;
  isGameOver: boolean;
  handleClick: (row: number, column: number) => void;
  reset: () => void;
}

export const Board = ({
  board,
  isGameOver,
  handleClick,
  reset,
}: BoardProps) => {
  useEffect(() => {
    console.log("isGameOver", isGameOver);
  }, [isGameOver]);
  return (
    <BoardContainer isGameOver={isGameOver} boardSize={board.squares.length}>
      {board.squares.map((row, rowIndex) =>
        row.map((square, columnIndex) => (
          <Square
            key={rowIndex * board.squares.length + columnIndex}
            value={square}
            isWinningSquare={board.winningSquaresIndexes?.some(
              (winningSquare) =>
                winningSquare.row === rowIndex &&
                winningSquare.column === columnIndex
            )}
            onClick={() => handleClick(rowIndex, columnIndex)}
            boardSize={board.squares.length}
          />
        ))
      )}
      <div className="playAgain">
        <p>
          {board.winner != "tie" ? `${board.winner} Wins!` : "It's a Draw!"}
        </p>
        <Button onClick={reset} text="Play Again" />
      </div>
    </BoardContainer>
  );
};
