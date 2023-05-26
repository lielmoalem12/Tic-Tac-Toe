import { GridLayout } from "../../Containers/GridLayout";
import { HorizontalLayout } from "../../Containers/HorizontalLayout";
import { VerticalLayout } from "../../Containers/VerticalLayout";
import { Button } from "../Button";
import { HorizontalScroller, OptionObject } from "../HorizontalScroller";
import { O } from "../O";
import { PlayerScore } from "../PlayerScore";
import { X } from "../X";
import { GameInfoBoardContainer, NextPlayerContainer } from "./style";

interface GameInfoBoardProps {
  reset: () => void;
  changeBoardSize: (size: number) => void;
  nextPlayer: string;
  boardSize: number;
}

const options = [
  { value: 3, label: "3x3" },
  { value: 4, label: "4x4" },
  { value: 5, label: "5x5" },
  { value: 6, label: "6x6" },
  { value: 7, label: "7x7" },
];

export const GameInfoBoard = ({
  reset,
  nextPlayer,
  changeBoardSize,
  boardSize,
}: GameInfoBoardProps) => {
  return (
    <GameInfoBoardContainer>
      <HorizontalLayout width="95%" height="90%">
        <NextPlayerContainer>
          <p>Next player:</p>
          {nextPlayer === "X" ? <X /> : <O />}
        </NextPlayerContainer>
        <HorizontalLayout width="35%" gap="3rem">
          <PlayerScore score={0} player="Player 1" shape="X" />
          <PlayerScore score={0} player="Player 2" shape="O" />
        </HorizontalLayout>

        <VerticalLayout height="100%">
          <GridLayout
            columns="1fr 1fr"
            rows="1fr 1fr"
            gap="0.5rem"
            height="90%"
          >
            <span>Board size:</span>
            <HorizontalScroller onChange={changeBoardSize} options={options} />

            <span>Other options:</span>
            <Button text="Reset" onClick={reset} />
          </GridLayout>
        </VerticalLayout>
      </HorizontalLayout>
    </GameInfoBoardContainer>
  );
};
