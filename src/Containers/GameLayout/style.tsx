import styled from "styled-components";
import { colors } from "../../utils/colorPallete";

export const GameLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 3fr 1fr 1fr 1fr 3fr;
  grid-template-areas:
    "gameinfo gameinfo gameinfo gameinfo gameinfo"
    ". board board board .";
  grid-gap: 5rem;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 20px;
  width: 80%;
  /* border: 1px solid #3c3c3c; */
  box-shadow: 0 0 10px 5px ${colors.backgroundShade};
`;
