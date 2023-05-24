import { useBoard } from "../../hooks/useBoard";
import { Square } from "../Square";
import { BoardContainer } from "./style";

export interface Board {
  squares: string[][];
  xIsNext: boolean;
  winner: string | null;
  winningSquaresIndexes: { row: number; column: number }[];
}

interface BoardProps {
  boardSize: number;
  board: Board;
  handleClick: (row: number, column: number) => void;
}

export const Board = ({ board, handleClick }: BoardProps) => {
  return (
    <BoardContainer boardSize={board.squares.length}>
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
    </BoardContainer>
  );
};
