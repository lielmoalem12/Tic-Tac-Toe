import styled from "styled-components";
import { colors } from "../../utils/colorPallete";

export const GameInfoBoardContainer = styled.div`
  grid-area: gameinfo;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  height: 100%;
  border: 2px solid ${colors.backgroundShade};
  border-radius: 20px;
  width: 95%;
  padding-left: 2.5%;
  padding-right: 2.5%;

  background: linear-gradient(#fff200, 10%, ${colors.background});
  box-shadow: 0 0 10px 2px ${colors.backgroundShade};
  @media (max-width: 768px) {
    padding-top: 0.5rem;
  }
`;

export const NextPlayerContainer = styled.div`
  height: 2rem;
  /* min-height: 65%; */
  overflow: hidden;
  padding: 0.7rem 1rem;
  background-color: #ff91003c;
  border-radius: 20px;
  width: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 1rem;
  span {
    white-space: nowrap;
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: -0.2rem;
    /* color: ${colors.header}; */
    color: ${colors.player};
  }
`;

export const GridLayoutOptions = styled.div`
  display: grid;
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
    /* color: ${colors.header}; */
    /* font-weight: bold; */
  }
  // for mobile view
  @media (max-width: 768px) {
    /* grid-template-columns: none; */
    row-gap: 1rem;
    column-gap: 0;
  }
`;
