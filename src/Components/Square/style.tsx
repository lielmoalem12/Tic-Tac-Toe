import styled, { keyframes } from "styled-components";

interface SquareContainerProps {
  isClickable: boolean;
  isWinningSquare: boolean;
  value: string | null;
}
export const SquareContainer = styled.button<SquareContainerProps>`
  background: white;
  font-size: 1.2rem;
  font-weight: bold;
  height: 5rem;
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

// create winning animation

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

        /* background: linear-gradient(90deg, #00ff00 0%, #2bff2b 25%, #21ee21 50%, #24ff24 75%, #00ff00 100%); */
    }
`;
