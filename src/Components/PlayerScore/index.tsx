import { VerticalLayout } from "../../Containers/VerticalLayout";
import { O } from "../O";
import { X } from "../X";
import { PlayerScoreContainer, Score } from "./style";

interface PlayerScoreProps {
  score: number;
  player: string;
  shape: string;
}

export const PlayerScore = ({ score, player, shape }: PlayerScoreProps) => {
  return (
    <PlayerScoreContainer>
      {/* <HorizontalLayout width="100%"> */}
      <Score>{score}</Score>
      <span>-</span>

      <VerticalLayout height="90%" gap=".5rem">
        <span className="player">{player}</span>
        {shape === "X" ? <X /> : <O />}
      </VerticalLayout>
      {/* </HorizontalLayout> */}
    </PlayerScoreContainer>
  );
};
