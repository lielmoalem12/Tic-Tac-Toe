import styled, { keyframes } from "styled-components";

interface SquareContainerProps {
  isClickable: boolean;
  isWinningSquare: boolean;
  value: string | null;
  boardSize: number;
}
export const SquareContainer = styled.button<SquareContainerProps>`
  background: #a1e7b3;
  font-size: 1.5vh;
  max-height: calc(40vh / ${({ boardSize }) => boardSize});
  overflow: hidden;
  font-weight: bold;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px hidden white;
  box-sizing: border-box;
  animation: ${({ isWinningSquare }) =>
      isWinningSquare ? winningAnimation : null}
    2s ease-in-out forwards;
`;

const winningAnimation = keyframes`
    0% {
        transform: scale(1);
        border:.1px solid #004904;
    }
    25% {
        transform: scale(1.3) rotate(-35deg);
    }
    100% {

        transform: scale(1) rotate(720deg);
        background: greenyellow;
        border: .1px solid #004904;
    }
`;
