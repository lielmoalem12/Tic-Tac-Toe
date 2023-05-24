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
