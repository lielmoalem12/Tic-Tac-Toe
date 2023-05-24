import { GameInfoBoardContainer } from "./style";

interface GameInfoBoardProps {
  reset: () => void;
  changeBoardSize: (size: number) => void;
  nextPlayer: string;
  boardSize: number;
}

export const GameInfoBoard = ({
  reset,
  nextPlayer,
  changeBoardSize,
  boardSize,
}: GameInfoBoardProps) => {
  return (
    <GameInfoBoardContainer>
      <p>Next player: {nextPlayer}</p>
      <button onClick={reset}>Reset</button>
      {/* create a dropdownmenu for sizes 3*3 to 7*7 */}
      <select
        onChange={(e) => {
          changeBoardSize(parseInt(e.target.value));
        }}
        defaultValue={boardSize}
      >
        <option value="3">3*3</option>
        <option value="4">4*4</option>
        <option value="5">5*5</option>
        <option value="6">6*6</option>
        <option value="7">7*7</option>
      </select>
    </GameInfoBoardContainer>
  );
};
