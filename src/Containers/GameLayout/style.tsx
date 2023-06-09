import styled from "styled-components";
import { colors } from "../../utils/colorPallete";

export const GameLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 3fr 1fr 1fr 1fr 3fr;
  grid-template-areas:
    "gameinfo gameinfo gameinfo gameinfo gameinfo"
    ". board board board ."
    ". board board board .";
  grid-gap: 3rem;
  align-items: center;
  justify-items: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 20px;
  width: 90%;
  max-height: 80vh;
  /* border: 1px solid #3c3c3c; */
  /* box-shadow: 0 0 10px 5px ${colors.backgroundShade}; */

  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "gameinfo"
      "board";
    grid-gap: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
