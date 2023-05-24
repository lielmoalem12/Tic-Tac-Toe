import { GameLayout } from "../../Containers/GameLayout";
import { useBoard } from "../../hooks/useBoard";
import { Board } from "../Board";
import { GameInfoBoard } from "../GameInfoBoard";

interface GameProps {
  boardSize: number;
}

export const Game = ({ boardSize }: GameProps) => {
  const { board, handleClick, reset, changeBoardSize } = useBoard(boardSize);

  return (
    <GameLayout>
      <Board board={board} handleClick={handleClick} boardSize={boardSize} />
      <GameInfoBoard
        reset={reset}
        nextPlayer={board.xIsNext ? "X" : "O"}
        changeBoardSize={changeBoardSize}
        boardSize={boardSize}
      />
    </GameLayout>
  );
};
