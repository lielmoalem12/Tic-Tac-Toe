import { GameLayout } from "../../Containers/GameLayout";
import { useBoard } from "../../hooks/useBoard";
import { Board } from "../Board";
import { GameInfoBoard } from "../GameInfoBoard";

interface GameProps {
  boardSize: number;
}

export const Game = ({ boardSize }: GameProps) => {
  const {
    board,
    player1Score,
    player2Score,
    isGameOver,
    handleClick,
    reset,
    changeBoardSize,
  } = useBoard(boardSize);

  return (
    <GameLayout>
      <Board
        isGameOver={isGameOver}
        board={board}
        handleClick={handleClick}
        boardSize={boardSize}
        reset={reset}
      />
      <GameInfoBoard
        player1Score={player1Score}
        player2Score={player2Score}
        winner={board.winner}
        reset={reset}
        nextPlayer={board.xIsNext ? "X" : "O"}
        changeBoardSize={changeBoardSize}
        boardSize={boardSize}
      />
    </GameLayout>
  );
};
