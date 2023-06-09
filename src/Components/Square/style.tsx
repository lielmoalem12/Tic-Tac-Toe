import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/colorPallete";

interface SquareContainerProps {
  isClickable: boolean;
  isWinningSquare: boolean;
  value: string | null;
  boardSize: number;
}
export const SquareContainer = styled.button<SquareContainerProps>`
  background: ${colors.background};
  font-size: 1.5vh;
  max-height: calc(40vh / ${({ boardSize }) => boardSize});
  /* overflow: hidden; */
  font-weight: bold;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px hidden white;
  box-sizing: border-box;
  width: 100%;
  > div {
    opacity: 1;
    width: 90%;
    margin: 0;
    animation: ${({ isWinningSquare }) =>
        isWinningSquare ? winningAnimation : null}
      1.5s ease-in-out 0.4s forwards;
  }
`;

const winningAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(.5) rotate(-35deg) ;
    }

    75% {
        transform: scale(1.1)  rotate(720deg);
    }
    100% {
        opacity: 1;
        transform: scale(1) rotate(720deg);
    }
`;
