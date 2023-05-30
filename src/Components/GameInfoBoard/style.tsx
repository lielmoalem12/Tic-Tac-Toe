import styled, { keyframes } from "styled-components";
import { colors, green } from "../../utils/colorPallete";

export const GameInfoBoardContainer = styled.div`
  grid-area: gameinfo;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  height: 100%;
  /* border: 2px solid ${colors.backgroundShade}; */
  border-radius: 20px;
  width: 95%;
  padding-left: 2.5%;
  padding-right: 2.5%;

  background: linear-gradient(${green.regular}, 10%, ${colors.background});
  box-shadow: 0 0 10px 2px ${colors.backgroundShade};
  @media (max-width: 768px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const fillAnimation = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;
interface NextPlayerContainerProps {
  isWinner: boolean;
}

export const NextPlayerContainer = styled.div<NextPlayerContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  > div {
    height: 2rem;
    overflow: hidden;
    background-color: ${colors.playerScoreBackground};
    border-radius: 20px;
    width: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    opacity: 0%;
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
      padding 0.5s ease-in-out, width 0.5s ease-in-out;
  }
  .hide {
    visibility: hidden;
    height: 0;
    width: 0;
    opacity: 0%;
  }
  .show {
    display: flex;
    height: 2rem;
    justify-content: center;
    opacity: 100%;
    width: fit-content;
    padding: 0.7rem 1rem;
    margin: 0;
    /* animation: ${fillAnimation} 0.5s ease-in-out forwards; */
  }
  .shape {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
  }
  span {
    white-space: nowrap;
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: -0.2rem;
    /* color: ${colors.header}; */
    color: ${colors.player};
  }
  @media (max-width: 768px) {
    .shape {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const GridLayoutOptions = styled.div`
  display: grid;
  background-color: ${colors.playerScoreBackground};
  padding: 1rem;
  border-radius: 20px;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  width: 100%;
  justify-items: center;
  align-items: center;
  // center the grid itself
  justify-content: first baseline;
  align-content: center;
  span {
    justify-self: start;
    color: ${colors.player};
    font-weight: bold;
    margin-top: -0.3rem;
    /* font-weight: bold; */
  }
  // for mobile view
  @media (max-width: 768px) {
    /* grid-template-columns: none; */
    row-gap: 1rem;
    column-gap: 0;
    padding: 0.7rem;
    grid-template-columns: 9fr 17fr;
  }
`;
