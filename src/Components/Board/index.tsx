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
}

export const Board = ({ boardSize }: BoardProps) => {
  const { board, handleClick, reset } = useBoard(boardSize);

  return (
    <div>
      <div className="status">
        {board.winner !== null
          ? `Winner: ${board.winner}`
          : `Next player: ${board.xIsNext ? "X" : "O"}`}
      </div>
      <button onClick={reset}>Reset</button>
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
            />
          ))
        )}
      </BoardContainer>
    </div>
  );
};
