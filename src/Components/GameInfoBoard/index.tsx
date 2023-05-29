import { useState } from "react";
import { GridLayout } from "../../Containers/GridLayout";
import { HorizontalLayout } from "../../Containers/HorizontalLayout";
import { VerticalLayout } from "../../Containers/VerticalLayout";
import { Button } from "../Button";
import { HorizontalScroller, OptionObject } from "../HorizontalScroller";
import { O } from "../O";
import { PlayerScore } from "../PlayerScore";
import { PlayerScoreContainer } from "../PlayerScore/style";
import { X } from "../X";
import {
  GameInfoBoardContainer,
  GridLayoutOptions,
  NextPlayerContainer,
} from "./style";

interface GameInfoBoardProps {
  reset: () => void;
  changeBoardSize: (size: number) => void;
  nextPlayer: string;
  boardSize: number;
  winner?: string | null;
  player1Score: number;
  player2Score: number;
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
  winner,
  player1Score,
  player2Score,
}: GameInfoBoardProps) => {
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <GameInfoBoardContainer>
      <GridLayout columns="1fr 1fr 1fr" width="100%" height="100%">
        {/* <HorizontalLayout width="95%" height="90%"> */}
        <HorizontalLayout width="100%" gap="1rem">
          <PlayerScore
            score={player1Score}
            player="Player 1"
            shape={isSwitched ? "O" : "X"}
          />
          <PlayerScore
            score={player2Score}
            player="Player 2"
            shape={isSwitched ? "X" : "O"}
          />
        </HorizontalLayout>
        <NextPlayerContainer isWinner={winner ? true : false}>
          <div className={winner ? "show" : "hide"}>
            {winner != "tie" && <span>Winner:</span>}
            {winner === "X" ? (
              <div className="shape">
                <X />
              </div>
            ) : winner == "O" ? (
              <div className="shape">
                <O />
              </div>
            ) : winner == "tie" ? (
              <span>Draw</span>
            ) : (
              ""
            )}
          </div>
          <div className={winner ? "hide" : "show"}>
            <span>Next player:</span>
            <div className="shape">{nextPlayer === "X" ? <X /> : <O />}</div>
          </div>
        </NextPlayerContainer>

        <VerticalLayout height="100%">
          <GridLayoutOptions>
            <span>Board size:</span>
            <HorizontalScroller onChange={changeBoardSize} options={options} />

            <span>Other options:</span>
            <HorizontalLayout width="100%" gap="1rem">
              <Button
                text="Change sides"
                onClick={() => {
                  reset();
                  setIsSwitched((prev) => !prev);
                }}
              />
              <Button text="Reset" onClick={reset} />
            </HorizontalLayout>
          </GridLayoutOptions>
        </VerticalLayout>
        {/* </HorizontalLayout> */}
      </GridLayout>
    </GameInfoBoardContainer>
  );
};
