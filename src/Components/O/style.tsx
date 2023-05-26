import styled, { css, keyframes } from "styled-components";
import { colors } from "../../utils/colorPallete";

const fillAnimation = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const winningAnimation = keyframes`
    0% {
    }
    100% {
      border-color: ${colors.OWinColor};
    }
`;

interface OContainerProps {
  isWinningSquare?: boolean;
}

export const OContainer = styled.div<OContainerProps>`
  min-height: 1rem;
  min-width: 1rem;
  height: 75%;
  aspect-ratio: 1/1;
  box-sizing: border-box;
  border: 4px solid ${colors.OColor};
  position: relative;
  border-radius: 50%;
  /* animation: ${fillAnimation} 0.3s linear forwards; */
  ${({ isWinningSquare }) =>
    isWinningSquare
      ? css`
          animation: ${winningAnimation} 1.5s ease-in-out forwards;
        `
      : css`
          animation: ${fillAnimation} 0.3s linear forwards;
        `}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    margin: 0;
  }
`;
