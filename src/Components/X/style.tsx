import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/colorPallete";

const fillAnimation = keyframes`
  0% {
    width: 0%;
    opacity: 0;
  }

  100% {
    opacity: 1;
    width: inherit;
    height: 100%;
  }
`;

export const XContainer = styled.div`
  min-height: 1rem;
  min-width: 1rem;
  height: 100%;
  aspect-ratio: 1/1;
  position: relative;
  margin: 0;

  animation: ${fillAnimation} 0.3s ease-in-out forwards;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${colors.XColor};
    left: 0;
    border-radius: 2px;
  }

  &::before {
    top: calc(50% - 2px);
    transform: rotate(45deg);
  }

  &::after {
    top: calc(50% - 2px);
    transform: rotate(-45deg);
  }
`;
