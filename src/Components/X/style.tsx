import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/colorPallete";

const fillAnimation = keyframes`
  0% {
    /* width: 0%; */
    opacity: 0;
    transform: scale(0);

  }

  100% {
    opacity: 1;
    /* width: inherit; */
    transform: scale(1);
    

    /* height: 100%; */
  }
`;

interface XProps {
  isWinningSquare?: boolean;
}

export const XContainer = styled.div<XProps>`
  min-height: 1rem;
  min-width: 1rem;
  height: 100%;
  aspect-ratio: 1/1;
  position: relative;
  margin: 0;

  animation: ${fillAnimation} 0.4s ease-in-out forwards;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    /* background-color: ${colors.XColor}; */
    background-color: ${(props) =>
      props.isWinningSquare ? colors.WinningColor : colors.XColor};
    transition: background-color 1.5s ease-in-out 0.4s;
    left: 0;
    border-radius: 2px;
    top: calc(50% - 2px);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    /* top: calc(50% - 2px); */
    transform: rotate(-45deg);
  }
`;
