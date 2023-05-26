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

  background: linear-gradient(#f9f047a9, 10%, ${colors.background});
  box-shadow: 0 0 10px 2px ${colors.backgroundShade};
`;

export const NextPlayerContainer = styled.div`
  /* border: 2px solid ${colors.backgroundShade}; */
  padding: 0.8rem;
  background-color: #00000024;
  border-radius: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: fit-content;

  > p {
    margin: 0;
    margin-top: -0.15rem;
    font-size: 1.2rem;
  }
`;
