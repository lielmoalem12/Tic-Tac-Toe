import styled from "styled-components";
import { colors } from "../../utils/colorPallete";

export const Score = styled.span`
  font-weight: bold;
  font-size: 2rem;
  // text color that aligns with the background color #B1EA9F
  color: ${colors.score};
`;

export const PlayerScoreContainer = styled.div`
  border: 1px dashed ${colors.header};
  padding: 1rem;
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
